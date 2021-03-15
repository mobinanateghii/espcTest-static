import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute) { }

  LoginForm = this.fb.group({
    email : ['' , [Validators.required , Validators.email] ] ,
    password : ['' , [Validators.required , Validators.minLength(8)] ]
  });

  ngOnInit(): void {

  }

  onSubmit(){
    // return it as object
    console.log(this.LoginForm.value);
  }

  GotoReg(){
    this.router.navigate(['/signup']);
  }
}
