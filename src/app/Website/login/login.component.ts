import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed typo
})
export class LoginComponent {
userobj:any={
  username:'',
  password:''
}
constructor(private router:Router){}
formvalue:any;
OnSubmit(){
if(this.userobj.username=="tanveer" && this.userobj.password=="123"){
this.formvalue=this.userobj;

this.router.navigateByUrl('/products');
alert("Login Successfull");
console.info("this.userobj",this.userobj);
}
else{
  alert("error found while login");
}
}
}

