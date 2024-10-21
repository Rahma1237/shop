import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConnexionService } from '../../connexion.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthserviceService } from '../../auth-service.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };
  payment = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };
  isFirst = true;
  isSubscribed = false;
  constructor(
    private connexion: ConnexionService,
    private router: Router,
    private auth: AuthserviceService
  ) {}
  onSubmit() {
    /*this.isFirst = false;
    console.log('Payment:', this.payment);
    if (this.connexion.addUser(this.user.email, this.user.password)) {
      this.isSubscribed = false;
      setTimeout(() => {
        this.connexion.isConnected.next(true);
        this.router.navigate(['/listProduct']);
      }, 1000);
    } else {
      this.isSubscribed = true;
      console.log('user exist');
    }
    this.resetFields();*/
    this.auth
      .register(this.user.password, this.user.email, this.user.name)
      .subscribe(() => this.connexion.isConnected.next(true));
  }
  private resetFields() {
    this.user.email = '';
    this.user.password = '';
  }
}
