import { db } from "@/prisma/db";
import { Metadata } from "next";

interface Props{
    params: {id: string}
}

// Denna funktion genererar statiska html sidor 
export async function generateStaticParams(){
  const posts = await db.post.findMany()
    return posts.map((post) => ({
        id: post.id
    }))
}

// Denna meta data tillhör bara denna page och är bra för att denna sidan hittas på sökmotorer som google
export const metadata: Metadata = {
  title: "Post Heaven | post page",
  description: "Read about best posts",
};

// Denna funktion genererar en page för varje post
export default async function PostPage({params}: Props) {
    
    const post = await db.post.findUnique({where: {id: params.id}})

  if (!post) return null;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.body}</p>
        <div className="flex justify-between items-center text-gray-500">
          <span className="font-medium">Author: {post.author}</span>
          <span className="text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </main>
  );
}



// davod0000