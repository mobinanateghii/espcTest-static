import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Inject} from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor( private fb: FormBuilder) { }

  SignUpForm = this.fb.group({
                  username : ['' , Validators.required ],
                  email : ['' , [Validators.required , Validators.email] ] ,
                  password : ['' , [Validators.required , Validators.minLength(8)] ]
  });

  ngOnInit(): void {
  }

  onSubmit(){
    // return it as object
    console.log(this.SignUpForm.value);
  }

}
