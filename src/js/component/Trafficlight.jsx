import React, { useEffect, useState } from "react";


const VERDE = "verde"
const ROJO = "rojo"
const NARANJA = "naranja"

const TrafficLight = () => {
    const [state, setState] = useState(ROJO)
    const [controller, setController] = useState(true)

    useEffect(() => {
        if (controller) {
            const timer = setTimeout(cambiarContenido, 1500);
            return () => clearTimeout(timer)
        }
    }, [state, controller]);

    const startStop = () => {
        setController(!controller)
    };

    const cambiarContenido = () => {
        if (state === ROJO) {
            setState(NARANJA)
        } else if (state === NARANJA) {
            setState(VERDE)
        } else {
            setState(ROJO)
        }
    };

    return (
        <main>
            <div className="palo-superior"></div>
            <div className="caja-de-luces">
                <div className={state === ROJO ? "red light-on-red" : "red"}></div>
                <div className={state === NARANJA ? "orange light-on-orange" : "orange"}></div>
                <div className={state === VERDE ? "green light-on-green" : "green"}></div>
            </div>
            <div>
                <button onClick={startStop}>stop/start</button>
            </div>
        </main>
    )
};

export default TrafficLight;