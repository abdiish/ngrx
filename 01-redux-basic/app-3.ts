import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

class Store<T> {

    //private state: T;

    constructor(private reducer: Reducer<T>, private state: T) {}

    // Obtener el estado
    getState() {
        return this.state;
    }

    // Dispara las acciones
    dispatch(action: Action) {

        this.state = this.reducer(this.state, action);
    }


    
}
// Estado inicial es 10
const store = new Store(contadorReducer, 10);

console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());

