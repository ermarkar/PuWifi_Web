import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * App events
 */
@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    getEvents() {
        return this.http.get(`/api/notification/notifications`);
    }
}