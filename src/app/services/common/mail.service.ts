import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service to send mails
 */
@Injectable()
export class MailService {
    constructor(private http: HttpClient) { }

    sendMail(data) {
        return this.http.post("/api/mail/send", data);
    }
}