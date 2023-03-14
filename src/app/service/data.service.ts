import { Injectable } from '@angular/core';
import { IRegistrationForm } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveUser(userData: IRegistrationForm): void
  {
    localStorage.setItem(userData.firstname, JSON.stringify(userData));
  }

  getUser(userName: string): IRegistrationForm
  {
    return JSON.parse(localStorage.getItem(userName));
  }

}
