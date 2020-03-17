import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor , HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Router} from "@angular/router";

import { map, catchError } from 'rxjs/operators';

import { AlertService } from '../alert/alert.service';
//import  { AuthService } from '../auth/services/auth.service';



@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private alertService:AlertService,
              /*private authService: AuthService*/){}

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if (!idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + 'idToken')
      });
      console.log(cloned);

      return next.handle(cloned).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          switch (error.status) {
            case 401:
              this.alertService.setAlert(error.error.message, 'danger');
              //this.authService.logOut();
              //this.router.navigate(['/auth']);
              break;
            case 409:
              console.log(error.error);

              this.alertService.setAlert(error.error.message, 'danger');
              break;
            case 498:
              this.alertService.setAlert(error.error.message, 'danger');
              //this.authService.logOut();
              //this.router.navigate(['/auth']);
              break;
            case 500:
              this.alertService.setAlert('Une erreur s\'est produite', 'danger');
              break
            default:
              this.alertService.setAlert('Une erreur s\'est produite', 'danger');
              break;
          }

          return throwError(error);
        }));

    } else {
      return next.handle(req);
    };
  }
}
