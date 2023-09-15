import { useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    setTimeout(() => {
        setSeconds(seconds + 1)
    }, 1000)
    return (
        <>
            <h1>{seconds}</h1>

        </>
    )
}

export default Timer;