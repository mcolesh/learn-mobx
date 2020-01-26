import {createContext, useContext } from 'react';
import { TodoList } from "./TodoList";


export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): TodoList => useContext(StoreContext);

export const rootElement = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
]);
