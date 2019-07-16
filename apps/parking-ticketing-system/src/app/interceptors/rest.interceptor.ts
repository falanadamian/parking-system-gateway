import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  private static readonly API_URL: string = environment.apiUrl;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpRequest = req.clone({
      url: req.url.startsWith("/") ? RestInterceptor.API_URL + req.url : req.url
    });

    return next.handle(httpRequest);
  }

}
