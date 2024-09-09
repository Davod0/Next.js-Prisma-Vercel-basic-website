import { posts } from "@/app/data";
import { db } from "./db";

async function main() {
    if (process.env.NODE_ENV === "production") return;
    await db.post.deleteMany()
    await db.post.createMany({ data: posts })
}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })