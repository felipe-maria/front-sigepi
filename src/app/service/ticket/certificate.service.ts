import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CertificateDto} from "../../shared/domain/certificate-dto";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private readonly API: string = 'http://0.0.0.0:3000/certificates';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CertificateDto[]> {
      return this.http.get<CertificateDto[]>(this.API);
  }

  create(certificate: CertificateDto): Observable<CertificateDto> {
    return this.http.post<CertificateDto>(this.API, certificate);
  }

  delete(id: number): Observable<CertificateDto> {
    const url = `${this.API}/${id}`;
    return this.http.delete<CertificateDto>(url);
  }

  find(id: number): Observable<CertificateDto> {
    const url = `${this.API}/${id}`;
    return this.http.get<CertificateDto>(url);
  }

  update(certificate: CertificateDto): Observable<CertificateDto> {
    const url = `${this.API}/${certificate.id}`;

    return this.http.put<CertificateDto>(url, certificate);
  }

}
