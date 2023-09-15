import 'bootstrap/dist/css/bootstrap.css'

import { useState } from "react";

function ListGroup() {
    const arrayChoice = ['choice 1', 'choice 2', 'choice 3', 'choice 4']
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <>
            <h2>Item Selection</h2>
            <div className="container">
                <ul className="list-group">
                    {arrayChoice.map((a, index) =>
                        <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => {
                            setSelectedIndex(index)
                        }}>{a}</li>)}
                </ul>
            </div>
        </>
    )
}
export default ListGroup;