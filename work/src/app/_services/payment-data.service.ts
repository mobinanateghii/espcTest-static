import { Injectable } from '@angular/core';
import {IPay} from '../ipay';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../edit-payment/dialog/dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorsComponent} from '../_Errors/errors/errors.component';

@Injectable({
  providedIn: 'root'
})
export class PaymentDataService {

  ELEMENT_DATA: IPay[] = [
    {Form_key: '124', name: 'Facilities', Service_Provider: 'Mellat Bank', Description: 'Lorem ipsum dolor sit amet...'},
    {Form_key: '248', name: 'Housing', Service_Provider: 'Passargard Bank', Description: 'consectetur adipiscing elit'},
    {Form_key: '389', name: 'Welfare', Service_Provider: 'Melli Bank', Description: 'Ut enim ad minim veniam'},
    {Form_key: '421', name: 'Clothing', Service_Provider: 'Ayande Bank', Description: 'Excepteur sint occaecat cupidatat'},
    {Form_key: '519', name: 'acquirement', Service_Provider: 'Sina Bank', Description: 'sint occaecat cupidatat non proident'},
    {Form_key: '658', name: 'Housing', Service_Provider: 'Passargard Bank', Description: 'ut labore et dolore magna aliqua'},
    {Form_key: '796', name: 'acquirement', Service_Provider: 'Sina Bank', Description: 'nisi ut aliquip ex ea commodo consequat'},
    {Form_key: '821', name: 'Welfare', Service_Provider: 'Mellat Bank', Description: 'sunt in culpa qui officia deserunt mollit'},
    {Form_key: '907', name: 'Clothing', Service_Provider: 'Melli Bank', Description: 'ostrud exercitation ullamco laboris'},
      ];

  ServiceProvidernames = ['Mellat Bank', 'Passargard Bank' , 'Melli Bank' , 'Ayande Bank' , 'Sina Bank' ];
  displayedColumns: string[] = ['Form_key', 'name', 'Service_Provider', 'Description'];

  constructor(private dialog: MatDialog , private snackBar: MatSnackBar) { }

        creat_payment(PayData: IPay){
            this.ELEMENT_DATA.push(PayData);
        }

        show_payment_data(){
          return this.ELEMENT_DATA;
        }

        Delete_Payment_Data(data) {
            const fin = this.ELEMENT_DATA.find( x => ( x.Service_Provider === data.Service_Provider &&
                                                                x.Form_key === data.Form_key &&
                                                                x.name === data.name));
            // console.log(fin);
            if (fin === undefined){
              this.snackBar.openFromComponent(ErrorsComponent ,
                {duration: 2000 , data: {message : 'Please enter a valid information and try again'} });
            }else {
            this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(fin) ,1 );
                  }

          }

        Update_Payment_Data(data) {
          const fin = this.ELEMENT_DATA.find( x => ( x.Service_Provider === data.Service_Provider &&
                                                              x.Form_key === data.Form_key));
          console.log(fin);
          if (fin === undefined){
            this.snackBar.openFromComponent(ErrorsComponent , {duration: 2000 ,
                                                                      data: {message : 'Please enter a valid information and try again'} });
          }else{
            const dialogRef =  this.dialog.open(DialogComponent , {data : {Form_key: fin.Form_key ,
                                                                                  Service_Provider: fin.Service_Provider ,
                                                                                  name : fin.name ,
                                                                                  Description : fin.Description}});

            dialogRef.afterClosed().subscribe(result => { this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(fin) , 1 , result)});
              }
        }






}
