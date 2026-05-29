import React, { use, useEffect, useState } from "react"; 
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const HomePage =()=>{
    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return(
        <div>
            <h1>รายชื่อผู้ใช้</h1>
            <Link to = "/about">ไปหน้า About</Link>
            {users.map(user =>(
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                />
            ))}
        </div>
    );


}
export default HomePage;