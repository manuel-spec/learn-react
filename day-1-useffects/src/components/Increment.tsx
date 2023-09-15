import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css'

function Increment() {
    const [NumberIncrement, SetNumberIncrement] = useState(0);
    return (
        <>
            <h1>
                {NumberIncrement}
            </h1>
            <button className='btn btn-danger m-lg-1' onClick={() => {
                SetNumberIncrement(NumberIncrement + 1)
            }}>+</button>
            <button className='btn btn-danger' onClick={() => {
                SetNumberIncrement(NumberIncrement - 1)
            }}>-</button>
        </>
    )
}

export default Increment;