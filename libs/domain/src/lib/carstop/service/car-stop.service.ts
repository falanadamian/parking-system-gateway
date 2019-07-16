import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CarStop} from "../car-stop";

@Injectable({
  providedIn: 'root'
})
export class CarStopService {

  private readonly RESOURCE_URL: string = "/car-stops";

  constructor(private http: HttpClient) {
  }

  create(carStop: CarStop): Observable<CarStop> {
    return this.http.post<CarStop>(`${this.RESOURCE_URL}`, carStop);
  }

  update(carStop: CarStop): Observable<CarStop> {
    return this.http.put<CarStop>(`${this.RESOURCE_URL}/${carStop.id}`, carStop);
  }

  delete(carStop: CarStop) {
    return this.http.delete(`${this.RESOURCE_URL}/${carStop.id}`);
  }

  getAll(): Observable<CarStop[]> {
    return this.http.get<CarStop[]>(`${this.RESOURCE_URL}`);
  }

  getOne(id: number) {
    return this.http.get<CarStop>(`${this.RESOURCE_URL}/${id}`);
  }


}
