import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent {

  historyList: string[] = [];


  ngOnInit(): void {
    let history = localStorage.getItem('history');
    if (history) {
      this.historyList = JSON.parse(history);
    }
  }

  borrarHistorial(): void {
    localStorage.removeItem('history');
    this.historyList = [];
  }
}
