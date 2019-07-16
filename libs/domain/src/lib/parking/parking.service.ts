import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CarStop} from "../..";
import {ParkingResponse} from "../parking-response/parking-response";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private readonly RESOURCE_URL: string = "http://localhost:8080/parking";
  private readonly PARKING_ENTRY_URL: string = `${this.RESOURCE_URL}/entry`;
  private readonly PARKING_DEPARTURE_URL: string = `${this.RESOURCE_URL}/departure`;

  constructor(private http: HttpClient) {
  }

  regularParkingEntry(): Observable<ParkingResponse<CarStop>> {
    return this.http.get<ParkingResponse<CarStop>>(`${this.PARKING_ENTRY_URL}/regular`);
  }

  subscriptionParkingEntry(cardCode: string): Observable<string> {
    return this.http.post(`${this.PARKING_ENTRY_URL}/subscription`, cardCode, {responseType: 'text'});
  }
}
