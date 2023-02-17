import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventServiceService } from '../event-service.service';

@Component({
  
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Event = new Event(0, "", "", "", "", "", "");
  events: any;
  message: any;
  constructor(private service: EventServiceService) { }

  ngOnInit() {

    this.getAllEventsForm();
    
    
  }

  public getAllEventsForm() {
    let res = this.service.getAllEvents();
    res.subscribe((data) => this.events = data);
  }

  public getEventForm(id) {
    this.service.getEvent(id); 
  }

  public addEventForm() {
    let res = this.service.addEvent(this.event);
    res.subscribe((data) => this.message = data);
    this.getAllEventsForm();
  }

  public deleteEventForm(id: number) {
    let res = this.service.deleteEvent(id);
    res.subscribe((data) => this.message = data);
    this.getAllEventsForm();
  }

  public prepareForUpdateForm(event) {
    this.event = event;
  }

  public updateEventForm() {
    let res = this.service.updateEvent(this.event); 
    res.subscribe((data) => this.message = data);
    this.getAllEventsForm();
    this.event = {};
  }


}
