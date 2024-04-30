import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';
  historyList: string[] = [];

  appendToDisplay(value: string): void {
    this.display += value;
  }

  clearDisplay(): void {
    this.display = '';
  }

  deleteLastDigit(): void {
    this.display = this.display.slice(0, -1);
  }

  calculate(): void {
    try {
      let expression = this.display;
      let result = eval(expression);
      this.display = result.toString();
      this.saveToHistory(`${expression} = ${result}`);
    } catch (error) {
      this.display = 'Error';
    }
  }

  saveToHistory(operation: string): void {
    this.historyList.push(operation);
    localStorage.setItem('history', JSON.stringify(this.historyList));
  }

  borrarHistorial(): void {
    localStorage.removeItem('history');
    this.historyList = [];
  }

  ngOnInit(): void {
    let history = localStorage.getItem('history');
    if (history) {
      this.historyList = JSON.parse(history);
    }
  }
}


