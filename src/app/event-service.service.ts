import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

const bootUrl = "http://localhost:8085/events";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { }

  

  public addEvent(event) {
    return this.http.post(bootUrl, event, { responseType: 'text' as 'json' }); 
  }
  public getAllEvents() {
    return this.http.get(bootUrl);
  }
  public getEvent(id) {
    return this.http.get(bootUrl + "/" + id);
  }
  public updateEvent(event) {
    return this.http.put(bootUrl + "/" + event.id, event, { responseType: 'text' as 'json' });
  }
  public deleteEvent(id) {
    return this.http.delete(bootUrl + "/" + id, { responseType: 'text' as 'json' });
  }

}
