import Link from "next/link";
import { posts } from "./data"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
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
    </main>
  );
}
