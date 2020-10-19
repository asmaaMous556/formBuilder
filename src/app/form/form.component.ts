import { Component, OnInit } from '@angular/core';
import {FormBuilder, MinLengthValidator} from '@angular/forms';
import{Validators} from '@angular/forms'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  // datetime:NgbDateStruct;
  constructor(private fb: FormBuilder) { }

  profileForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(5)]],
    lastName:['',Validators.required,Validators.minLength(5)],
    Email:['',Validators.required,Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')],
    phoneNum:['',Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    weight:[''],
    height:['',Validators.pattern('^[0-9]{1,4}(\.[0-9][0-9])?$')],
    married:[''],
    dateTime:[''],
    


  })
  
  save(){
    console.log(this.profileForm.value);
  }

}
