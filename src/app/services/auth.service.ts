import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authoficated: boolean = false;
  isConnected: BehaviorSubject<boolean>;
  private users: Map<string, string> = new Map();
  private token: string | null = null;
  constructor() {
    const initialConnectedState =
      this.getLocalStorageItem('isConnected') === 'true';

    this.isConnected = new BehaviorSubject<boolean>(initialConnectedState);
    this.isConnected.subscribe((value) => {
      this.setLocalStorageItem('isConnected', value.toString());
    });

    const savedUsers = this.getLocalStorageItem('users');
    if (savedUsers) {
      this.users = new Map(JSON.parse(savedUsers));
    }
  }

  isSubscribe(mail: string): boolean {
    return this.users.has(mail);
  }

  addUser(mail: string, password: string): boolean {
    if (!this.isSubscribe(mail)) {
      this.users.set(mail, password);
      console.log(mail);
      this.setLocalStorageItem(
        'users',
        JSON.stringify(Array.from(this.users.entries()))
      );
      return true;
    } else {
      return false;
    }
  }

  giveAcces(email: string, password: string): boolean {
    if (this.isSubscribe(email) && this.users.get(email) === password) {
      console.log('Connexion réussie!');
      this.authoficated = true; // Met à jour l'état d'authentification
      this.isConnected.next(true);
      return true;
    } else {
      console.log('Identifiants incorrects. Veuillez réessayer.');
      return false;
    }
  }

  estConnecter(): Observable<boolean> {
    return this.isConnected.asObservable();
  }

  private getLocalStorageItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  login() {
    this.authoficated = true; // Ajout de cette ligne pour mettre à jour l'état
    this.isConnected.next(true); // Notifie que l'utilisateur est connecté
  }

  logout() {
    this.authoficated = false;
    this.isConnected.next(false); // Notifie que l'utilisateur est déconnecté
  }

  public isAuth(): boolean {
    return this.authoficated;
  }
  // Method to set the token, possibly when user logs in
  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.token != null;
  }
}
