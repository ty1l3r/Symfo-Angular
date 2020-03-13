import { Component, OnInit } from '@angular/core';

import{AlertService} from './alert.service';

@Component({
  selector: 'app-alert',
  template: 
  `
    <div *ngIf="getAlert().isAlert"  class="alert" [ngClass]="getAlert().status">
      {{getAlert().message}}
      <i (click)="closeAlert()" class="fas fa-times"></i>
    </div>
  `,
  styles: 
  [`
  		i{position: absolute;right: 10px;}
  		div{text-align:center;font-weight:bold;}
  		div:first-letter{text-transform:uppercase;}
  `]
})
export class AlertComponent implements OnInit {

  constructor(private alertService:AlertService) { }

  ngOnInit() {}

  getAlert(){
  	return this.alertService.getAlert();
  }// EO getAlert

  closeAlert(){
  	this.alertService.closeAlert();
  }//EO closeAlert
}//EO AlertComponent