import { Component } from '@angular/core';
import { IEvent } from './i-event';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  events: IEvent[] = [
    {
      title: 'Evento Prueba',
      image: '',
      date: '2025-12-12',
      description: 'Descripción evento prueba',
      price: 50.5
    },
    {
      title: 'Evento Prueba 2',
      image: '',
      date: '2025-12-13',
      description: 'Descripción evento prueba 2',
      price: 24.99
    }
  ]
}
