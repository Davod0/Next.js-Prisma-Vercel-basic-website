import { posts } from "@/app/data";
import { Metadata } from "next";

interface Props{
    params: {id: string}
}

// Denna funktion genererar statiska html sidor 
export function generateStaticParams(){
    return posts.map((post) => ({
        id: post.id
    }))
}

// Denna meta data tillhör bara denna page och är bra för att denna sidan hittas på sökmotorer som google
export const metadata: Metadata = {
  title: "Post Heaven | post page",
  description: "Read about best posts",
};



export default function PostPage({params}: Props){

    const post = posts.find((post) => post.id === params.id);

    if (!post) return null;

    return(
        <main>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <span>{post.author}</span>
            <span>{post.createdAt.toString()}</span>
        </main>
    );

}