import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRegistrationForm } from '../interfaces/interfaces';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './form-component.component.html',
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;
  public registrationResult: IRegistrationForm;

  public test: number[] = [];

  constructor(private readonly formBuilder: FormBuilder,
    private readonly dataService: DataService){}

  ngOnInit(): void {
     this.formGroup = this.formBuilder.group({
        firstname: new FormControl("", [Validators.required, Validators.minLength(3)]),
        lastname: new FormControl("", [Validators.required, Validators.minLength(3)]),
        eMail: new FormControl("", [Validators.email]),
        password: new FormControl("", [Validators.minLength(3), Validators.maxLength(8)]),
      });
  }

  submit(){
    console.log("Form submitted");

    this.registrationResult = this.formGroup.value;
    this.dataService.saveUser(this.registrationResult);
    console.info(this.registrationResult);
  }

  getUser(){
    this.registrationResult = this.dataService.getUser("jakob");
    console.info(this.registrationResult);
  }

}
