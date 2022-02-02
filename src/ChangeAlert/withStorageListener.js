import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponenWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en TODOS_V1');
                setStorageChange(true);
            }
        })

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            />
        );
    }
}

export { withStorageListener };