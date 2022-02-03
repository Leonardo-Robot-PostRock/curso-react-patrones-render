import React from 'react';
import './TodoList.css';


function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchText)}
      {/* se envian cada uno de los todos que se iteraría en render de nuestro index/App */}
      <ul>
        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
      </ul>
      {/* {props.searchedTodos.map(todo => props.render(todo))} */}
    </section>
  );
}

export { TodoList };
