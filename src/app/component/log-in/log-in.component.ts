import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AuthserviceService } from '../../auth-service.service';
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  constructor(
    private authservice: AuthService,
    private auth: AuthserviceService
  ) {}

  handleLogin() {
    this.authservice.login();
  }
}
