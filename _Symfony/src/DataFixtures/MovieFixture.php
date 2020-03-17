<?php

namespace App\DataFixtures;

use App\Entity\Movie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class MovieFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $movie = ["fast and furious", "harry potter", "star wars", "seigneur des anneaux", "fatal"];

        foreach ($movie as $data){
            $movie = new Movie();
            $movie->setTitle($data)
                    ->setCount(0);

            $manager->persist($movie);
        }

        $manager->flush();
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
