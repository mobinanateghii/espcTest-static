import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PaymentDataService} from '../_services/payment-data.service';
import {IPay} from '../ipay';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';




@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private PayData: PaymentDataService,
              ) {
  }

  ServiceProvidernames = this.PayData.ServiceProvidernames;

  ELEMENT_DATA: IPay[] = this.PayData.show_payment_data();
  displayedColumns = this.PayData.displayedColumns;
  dataSource = new MatTableDataSource<IPay>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  DeletePayForm = this.fb.group({
                        Form_key: ['', Validators.required],
                        name: ['', Validators.required],
                        Service_Provider: ['', Validators.required],
  });

  EditPayForm = this.fb.group({
                      Form_key: ['', Validators.required],
                      Service_Provider: ['', Validators.required],
  });

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  Delete_Data() {
    const data = this.DeletePayForm.value;
    this.PayData.Delete_Payment_Data(data);
  }


  Edit_Data(){
    // service
    const data = this.EditPayForm.value;
    this.PayData.Update_Payment_Data(data);
  }


}

