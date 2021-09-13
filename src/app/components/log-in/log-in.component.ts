import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]  ],
      password: ['',[Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)] ],
    });
  }

  onChange(val){
    if( (this.loginForm.valid)){
      document.getElementById("logInButton").querySelector('button').disabled = false
    }else{
      document.getElementById("logInButton").querySelector('button').disabled = true
    }
  }
  ngOnInit(): void {
    document.getElementById("logInButton").querySelector('button').disabled = true

  }
  toggleAddTask(){
    console.log('toggle')
  }
}
