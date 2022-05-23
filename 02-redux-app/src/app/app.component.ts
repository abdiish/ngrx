import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './contador/contador.actions';

// interface appState {
//   contador: number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    //this.contador = 10;
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  incrementar() {
    //this.contador += 1;
    this.store.dispatch(actions.incrementar())
  }

  decrementar() {
    //this.contador -= 1;
    this.store.dispatch(actions.decrementar())
  }

}
