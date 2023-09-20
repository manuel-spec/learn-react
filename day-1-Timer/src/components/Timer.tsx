import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSecond] = useState(0);
    setTimeout(() => {
        setSecond(seconds + 1)
    }, 1000)

    useEffect(() => {

    })
    return (
        <>
            <h1>{seconds}</h1>

        </>
    )
}
export default Timer;