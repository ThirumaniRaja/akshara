import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]

    })
  }

  onLogin(){
    if(this.form.valid){
    
    }
  }

}
