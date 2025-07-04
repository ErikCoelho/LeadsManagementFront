import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead, UpdateLeadCommand } from '../models/lead.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWaitingLeads(pageNumber: number = 1, pageSize: number = 10): Observable<Lead[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Lead[]>(`${this.baseUrl}/v1/leads/waiting`, { params });
  }

  getAcceptedLeads(pageNumber: number = 1, pageSize: number = 10): Observable<Lead[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Lead[]>(`${this.baseUrl}/v1/leads/accepted`, { params });
  }

  updateLead(id: string, command: UpdateLeadCommand): Observable<any> {
    return this.http.put(`${this.baseUrl}/v1/leads/${id}`, command);
  }
} 