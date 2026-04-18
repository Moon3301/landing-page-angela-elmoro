import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY_N8N, URL_WEBHOOK_N8N_EMAIL } from '../../../environments/environments';

export interface RoadmapEmailRequest {
  /** Recipient email address */
  email: string;
  /** Recipient's name (optional, used to personalize the email) */
  name?: string;
  /** Message to be included in the email */
  message?: string;
  /** Subject of the email */
  subject?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly API_URL = URL_WEBHOOK_N8N_EMAIL;
  private readonly API_KEY = API_KEY_N8N;

  constructor(private http: HttpClient) {}

  /**
   * Sends the roadmap email to the given recipient.
   * Called from lead-magnet forms throughout the landing page.
   */
  sendRoadmapEmail(payload: RoadmapEmailRequest): Observable<EmailResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'api-key': this.API_KEY });
    return this.http.post<EmailResponse>(this.API_URL, payload, { headers });
  }
}
