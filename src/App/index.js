import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//COMPOSICIÓN DE COMPONENTES
function App() {
  const [state, setState] = React.useState('estado compartido');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}
function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}
function TodoList({ children }) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
}
function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch </p>;
}
function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}

// function Ap() {
//   return (
//     <Todoprovider>
//       <ApUI />
//     </Todoprovider>
//   );
// }

export default App;
