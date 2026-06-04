export default async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return(
        <div className="container">
            <h1 className="title">Users</h1>
            {users.map((user: {id: number ; name: string ; email: string}) =>
            ( <div key = {user.id}>
                <p>ชื่อ : {user.name}</p>
                <p>Email : {user.email}</p>
                <hr/>
            </div>
            ))}
        </div>
    )
}