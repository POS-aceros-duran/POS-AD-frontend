import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { SessionStorageConstants } from 'src/app/utils/session.storage';

//@Injectable({ providedIn: 'root' })
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let token = sessionStorage.getItem(SessionStorageConstants.USER_TOKEN);
//     if (token) {
//       if (!req.url.toString().includes('refresh')) {
//         req = req.clone({
//           setHeaders: {
//             Authorization: 'Bearer ' + token
//           },
//         });
//       }
//     }

//     return next.handle(req);
//   }
// }

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  let token = sessionStorage.getItem(SessionStorageConstants.USER_TOKEN);
  if (token) {
    const cloneRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });
      return next(cloneRequest);

  }
    
  return next(req);
};
