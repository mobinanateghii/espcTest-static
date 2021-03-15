import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {IPay} from '../ipay';
import {MatPaginator} from '@angular/material/paginator';
import {PaymentDataService} from '../_services/payment-data.service';


@Component({
  selector: 'app-creat-payment',
  templateUrl: './creat-payment.component.html',
  styleUrls: ['./creat-payment.component.css']
})
export class CreatPaymentComponent implements OnInit {


  constructor( private fb: FormBuilder , private PayDataService: PaymentDataService) { }

  ELEMENT_DATA: IPay[] = this.PayDataService.show_payment_data() ;
  displayedColumns = this.PayDataService.displayedColumns;
  dataSource = new MatTableDataSource<IPay>(this.ELEMENT_DATA);
  ServiceProvidernames = this.PayDataService.ServiceProvidernames;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  CreatPayForm = this.fb.group({
                      Form_key: ['' , Validators.required] ,
                      name: ['', Validators.required],
                      Service_Provider: ['', Validators.required] ,
                      Description: ['', Validators.required]
  });



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  CreatPayment(){
    const data: IPay = this.CreatPayForm.value;
    this.PayDataService.creat_payment(data);
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

