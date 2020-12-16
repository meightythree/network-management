import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private defaultOptions = { observe: "response" };

  constructor(private readonly http: HttpClient) {}

  get<T>(url: string, options: any): Observable<T | any> {
    return this.http.get<T>(url, { ...this.defaultOptions, ...options });
  }
}
