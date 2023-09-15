import 'bootstrap/dist/css/bootstrap.css'
export default function Tasks(props) {
    return (
        <>
            <div className="container row-g-3 list-group">
                <h3>Tasks</h3>
                <ul>
                    <p key={props.todos.map((todo) => todo.id)}>{props.todos.map((todo) => <li className="list-group-item">{todo.title}</li>)}</p>
                </ul>
            </div>
        </>
    )
}