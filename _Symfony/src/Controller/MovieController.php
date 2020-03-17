<?php
namespace App\Controller;

use App\Entity\Movie;
use App\Repository\MovieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class MovieController extends ApiController
{
    /**
     * @Rest\Get("/api/movies", name="getMovie")
     * @IsGranted("ROLE_USER")
    */
    public function index(MovieRepository $movieRepository)
    {
        $movies = $movieRepository->transformAll();

        dump($movieRepository);

        return $this->respond($movies);
    }

    /**
    * @Rest\Post("/api/movies", methods="POST")
     *@IsGranted("ROLE_SUPER_ADMIN")
    */
    public function create(Request $request, MovieRepository $movieRepository, EntityManagerInterface $em)
    {
        $request = $this->transformJsonBody($request);



    // Est ce que la requete existe ?
        if (! $request) {
            //si elle n'existe pas on renvoi une érreur.
            return $this->respondValidationError('Please provide a valid request!');
        }
        // validate the title
        if (! $request->get('title')) {
            return $this->respondValidationError('Please provide a title!');
        }

        // persist the new movie
        $movie = new Movie;
        $movie->setTitle($request->get('title'));
        $movie->setCount(0);
        $em->persist($movie);
        $em->flush();

        return $this->respondCreated($movieRepository->transform($movie));
    }

    /**
    * @Route("/movies/{id}/count", methods="POST")
    */
    public function increaseCount($id, EntityManagerInterface $em, MovieRepository $movieRepository)
    {
        $movie = $movieRepository->find($id);

        if (! $movie) {
            return $this->respondNotFound();
        }

        $movie->setCount($movie->getCount() + 1);
        $em->persist($movie);
        $em->flush();

        return $this->respond([
            'count' => $movie->getCount()
        ]);
    }

}
