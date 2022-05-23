import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Comprar cereal'),
  new Todo('Leer página 24'),
  new Todo('Ver serie'),
  new Todo('Buscar disco duro'),
];

// Separar cada uno de los todo de manera independiente

export const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
