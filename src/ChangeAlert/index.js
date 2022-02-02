import React from "react";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button>Volver a cargar la información</button>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWhitStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWhitStorageListener };