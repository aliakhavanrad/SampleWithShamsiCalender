import { Injectable } from "@angular/core";
import { User } from "src/_models/user";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService{

    set(key: string, data: any): void {
        try {
          localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
          console.error('Error saving to localStorage', e);
        }
      }
    
      get(key: string) {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (e) {
          console.error('Error getting data from localStorage', e);
          return null;
        }
      }

}