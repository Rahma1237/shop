import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ProduitsService } from '../../services/produits.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgForOf, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  categories: string[] = [];
  keyword!: string;

  constructor(
    private router: Router,
    private productService: ProduitsService,
    private authservice: AuthService,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const category = selectElement.value;

    if (category) {
      if (category == 'All') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/category', category]);
      }
    }
  }

  handleLogIn() {
    this.authservice.login();
  }

  handLogOut() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    return this.authservice.isAuth();
  }

  search() {
    this.shared.updateKeyword(this.keyword);
  }
}
