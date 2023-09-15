import { useState } from "react";

function Increment() {
    const [NumberIncrement, SetNumberIncrement] = useState(0);
    return (
        <>
            <h1>
                {NumberIncrement}
            </h1>
            <button onClick={() => {
                SetNumberIncrement(NumberIncrement + 1)
            }}>+</button>
            <button onClick={() => {
                SetNumberIncrement(NumberIncrement - 1)
            }}>-</button>
        </>
    )
}

export default Increment;