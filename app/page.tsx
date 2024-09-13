"use client";
import { CreatePost } from "./action";
import { ShowAllPosts } from "./ShowAllPosts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="flex flex-row gap-8">
        <form
          action={CreatePost}
          className="flex flex-col gap-4 mb-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Write a new blog post
          </h3>
          <textarea
            name="title"
            rows={6}
            placeholder="Title"
            className="dark:bg-neutral-800 bg-gray-100 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <textarea
            name="body"
            rows={6}
            placeholder="Body"
            className="dark:bg-neutral-800 bg-gray-100 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <textarea
            name="author"
            rows={6}
            placeholder="Author"
            className="dark:bg-neutral-800 bg-gray-100 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Publish
          </button>
        </form>
        <div className="w-full max-w-lg">
          <h1 className="text-5xl font-bold text-black px-4 py-2">All Posts</h1>
          <ShowAllPosts />
        </div>
      </div>
    </main>
  );
}
