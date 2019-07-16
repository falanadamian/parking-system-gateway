import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Payment} from "../payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly RESOURCE_URL: string = "/payments";

  constructor(private http: HttpClient) {
  }

  create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.RESOURCE_URL}`, payment);
  }

  update(payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.RESOURCE_URL}/${payment.id}`, payment);
  }

  delete(payment: Payment) {
    return this.http.delete(`${this.RESOURCE_URL}/${payment.id}`);
  }

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.RESOURCE_URL}`);
  }

  getOne(id: number) {
    return this.http.get<Payment>(`${this.RESOURCE_URL}/${id}`);
  }
}
