import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // Recibe del padre mediente Input
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    //this.contador = 0;
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 3}));
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({ numero: 3}));
  }

  // resetNieto(nuevoContador: number) {
  //   this.contador = nuevoContador;
  //   this.cambioContador.emit(this.contador)
  // }
}
