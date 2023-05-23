import Container from "./Components/Container/Container";
import Button from "./Components/Button/Button"
import Timer from "./Components/timer/Timer";
import { useState } from "react";

const App = () => {

    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);

    const start = () => {
        setTimer(setInterval(() => {

            setTime(prevValue => prevValue + 1);

        }, 10))

    }

    const stop = () => {
        clearInterval(timer);
    };

    const reset = () => {
        setTime(0);
        clearInterval(timer);
    }

    return (
        <Container>
            <Timer time={time} />
            <Button onClick={start}>Start</Button>
            <Button onClick={stop}>Stop</Button>
            <Button onClick={reset}>Reset</Button>
        </Container>
    )
}

export default App;
