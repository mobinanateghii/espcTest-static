import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {IPay} from '../ipay';
import {FormBuilder, Validators} from '@angular/forms';
import {PaymentDataService} from '../_services/payment-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  constructor( private PayData: PaymentDataService ,
               private route: Router) { }

  displayedColumns = this.PayData.displayedColumns;

  ELEMENT_DATA: IPay[] = this.PayData.show_payment_data();

  dataSource = new MatTableDataSource<IPay>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
