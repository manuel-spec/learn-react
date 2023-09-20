import { useState } from "react"

export default function Buttons() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <div>
                <button onClick={
                    () => {
                        setNumber(number + 1)
                    }
                }>click me {number}</button><br /><br />
                <button>click me {number}</button>
            </div>
        </>
    )
}