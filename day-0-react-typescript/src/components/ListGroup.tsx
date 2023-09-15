import { MouseEvent, useState } from "react"

function ListGroup() {
    const cities = [
        "Ethiopia", "Algeria", "Turkey", "Egypt"]

    const [selectedIndex, setSelectedIndex] = useState(-1)
    const handleClick = (event: MouseEvent) => {
        console.log("cliecked")
        return;
    }
    return (
        <>
            <h1 className="container">List Group</h1>
            <ul className="container list-group">
                {cities.map((citie, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={citie}
                    onClick={() => {
                        setSelectedIndex(index)
                        console.log(cities[selectedIndex])
                    }}>{citie}</li>)}
            </ul>

        </>
    )
}
export default ListGroup;