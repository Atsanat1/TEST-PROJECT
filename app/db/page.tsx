import {PrismaClient} from "@prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})
const prisma = new PrismaClient({adapter})

export default async function DbPage() {
    // await prisma.user.create({
    //     data: {
    //         name: "Moongkon",
    //         email: "Moongkon@gmail.com"
    //     }
    // })

    const user = await prisma.user.findMany()

    return(
    <div className="container">
        <h1 className="title">Users from Database</h1>
        {user.map((u: {id: number; name: string; email: string}) => (
            <div key = {u.id}>
                <p>ชื่อ: {u.name}</p>
                <p>Email: {u.email}</p>
                <hr/>
                </div>
        ))}
    </div>
    )

}
