import React , { useState} from 'react';
import { useStore } from './Store'
import { useObserver } from 'mobx-react-lite'

export const TodoItem = ({todo}) => {
    const todoList = useStore();
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
      todo.updateText(newText);
      setEdit(false);
      setText('');
    };

    return (
        <div className="todo-item">
            {
                isEditing ?
                    <div>
                        <input type="text" onChange={(e) => setText(e.target.value)}/>
                        <button onClick={saveText}>save</button>
                    </div>
                    :
                    <div>
                        <span>{todo.text}</span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        <button onClick={() => setEdit(true)}>edit</button>
                        <button onClick={() => todoList.removeTodo(todo)}>X</button>
                    </div>
            }
        </div>
    )
};

export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (
        <div className="todo-list">
            <div className="open-todos">
                <span>Open Todos:</span>
                {todoList.openTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
            <div className="finished-todos">
                <span>Finished Todos:</span>
                {todoList.finishedTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
        </div>
    ));
};