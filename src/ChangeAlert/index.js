import React from "react";
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const {
        show,
        toggleShow
    } = useStorageListener(sincronize);
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Has al parecer has realizado cambios en otra pestaña o ventana del navegador</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() =>
                            show = toggleShow(false)

                        }
                    >
                        ¡Yes!
                    </button>
                </div>
            </div >
        );
    } else {
        return null;
    }
}

export { ChangeAlert };