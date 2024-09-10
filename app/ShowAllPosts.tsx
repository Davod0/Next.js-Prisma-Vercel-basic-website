import { db } from "@/prisma/db";
import Link from "next/link";


export async function ShowAllPosts() {
    const posts = await db.post.findMany();
    return(
        <div className="space-y-6">
            {posts.map((post) => (
            <Link key={post.id} href={`/Posts/${post.id}`} className="block">
                <div className="bg-white p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <p className="text-lg font-semibold text-gray-800">{post.title}</p>
                <p className="text-gray-600">{post.body}</p>
                <p className="text-sm text-gray-500">Author: {post.author}</p>
                <p className="text-sm text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                </p>
                </div>
            </Link>
            ))}
      </div>
    );
}