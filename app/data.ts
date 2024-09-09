export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    createdAt: Date;
}

export const posts: Post[] = [
    {
        id: "1",
        title: "Introduction to TypeScript",
        body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        author: "John Doe",
        createdAt: new Date('2023-01-01'),
    },
    {
        id: "2",
        title: "Getting Started with Next.js",
        body: "Next.js is a React framework that enables server-side rendering and static site generation.",
        author: "Jane Smith",
        createdAt: new Date('2023-02-15'),
    },
    {
        id: "3",
        title: "Understanding JavaScript Closures",
        body: "A closure is the combination of a function and the lexical environment within which that function was declared.",
        author: "Alice Johnson",
        createdAt: new Date('2023-03-22'),
    }
];
