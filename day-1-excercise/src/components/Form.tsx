import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Tasks from './Tasks'


export default function Form() {
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])

    return <>
        <div className='container row-g-3'>
            <h2>Add Task</h2>
            <form className='form col-3' onSubmit={(e) => {
                e.preventDefault()
                setTodos([...todos, { title: newItem, id: crypto.randomUUID() }])
                console.log(todos)
            }}>
                <input type="text" className='form-control' value={newItem} onChange={e => { setNewItem(e.target.value) }} /><br />
                <input type="submit" value="Add" className='btn btn-primary' onClick={() => {


                }} />
            </form>
        </div>
        <Tasks todos={todos} />
    </>
}
