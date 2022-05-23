import { Todo } from './todos/models/todo.model';
/**
 * Indica como se encuentra el app state global de la aplicación
 */

export interface AppSate {
  todos: Todo[]
}
