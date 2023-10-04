import { useState } from "react"

export default function Fetch() {

    type use = {
        id: Number,
        name: string,
        username: string,
        email: string
    }
    const [user, setUser] = useState<use[]>([])
    function get() {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then(setUser)
    }
    return (
        <>
            <button onClick={get}>Fetch</button>
            <div>
                {user.map((user) => <p key={user.username}>{user.name} | {user.username} | {user.email}</p>)}
            </div>
        </>
    )
}   