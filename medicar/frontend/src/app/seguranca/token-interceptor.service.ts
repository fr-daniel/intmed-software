import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.auth.isTokenInvalido()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${this.auth.token}`
        }
      });
    }

    return next.handle(request);
  }
}
