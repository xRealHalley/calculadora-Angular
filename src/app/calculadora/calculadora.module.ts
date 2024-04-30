import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HistorialComponent } from './components/historial/historial.component';

@NgModule({
  declarations: [
    CalculadoraComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent,
    HistorialComponent
  ]
})

export class CalculadoraModule { }
