import { Injectable } from '@angular/core';

@Injectable()
export class AlertService{

	private alert = {
		message : '',
		isAlert : false,
		status : ''
	}

	constructor( ){	}/*EO constructor*/

	setAlert(alert:string, status:string){
		switch (status) {
			case "danger":
				this.alert.status = 'alert-danger';
				break;
			case "success":
				this.alert.status = 'alert-success';
				break;

			default:
				this.alert.status = 'alert-primary';
				break;
		}
		this.alert.message = alert;
		this.alert.isAlert = true;

		setTimeout(	() =>{this.closeAlert();	},3500);
	}/*EO setAlert */

	getAlert(){
		return this.alert;
	}/*EO getAlert */

	closeAlert(){
		this.alert.isAlert = false;
	}/*EO closeAlert */
}/*EO AuthService*/
