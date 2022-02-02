import React from "react";

function TodoHeader({ children, loading }) {

    return (
        <header>
            {/* React.Chilren.toArray */}
            {/* convierte cada uno de los componentes hijos de Header, en un array */}
            {
                React.Children.
                    toArray(children)
                    // Por cada hijo que hay en el array, se clonará el elemento (React.cloneElement) y se le enviará la propiedad: loading
                    .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    );
}

export { TodoHeader };