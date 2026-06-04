import Link from "next/link"

export default function Navbar({username}:{username:string}){
    return(
        <nav className="navbar">
            <Link href = "/">
            <button className="button">Home</button>
            </Link>
            <Link href = "/about">
            <button className="button">About</button>
            </Link>
            <Link href = "/component">
            <button className="button">Info</button>
            </Link>
            <Link href="/users">
            <button className="button">Users</button>
            </Link>
            <Link href="/db">
            <button className="button"><span>👤{username}</span></button>
            </Link>
        </nav>
    )
}