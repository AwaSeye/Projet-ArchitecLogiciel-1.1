import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../config/BASE_URL';
import {AuthentificationService} from "./authentification.service";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient, private authService: AuthentificationService) {}


  getAllData(url: string): Observable<any>{
    return this.http.get(BASE_URL.api_url + url)
  }

  saveData(url: string ,data: any) :Observable<any> {
    return this.http.post(BASE_URL.api_url + url, data)
  }

  updateData(url: string, data: any) : Observable<any>{
    return this.http.post(BASE_URL.api_url + url, data)
  }

  deleteData(url: string ) : Observable<any> {
    return this.http.delete(BASE_URL.api_url + url)
  }
}
