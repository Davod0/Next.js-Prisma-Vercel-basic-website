export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    createdAt: Date;
}

export const posts: Post[] = [
    {
        id: "66dec2fb8d798f7facb06ad3",
        title: "Introduction to TypeScript",
        body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        author: "John Doe",
        createdAt: new Date('2023-01-01'),
    },
    {
        id: "66dec30a6aa9f1bd500cb99a",
        title: "Getting Started with Next.js",
        body: "Next.js is a React framework that enables server-side rendering and static site generation.",
        author: "Jane Smith",
        createdAt: new Date('2023-02-15'),
    },
    {
        id: "66dec31311878c59ac158329",
        title: "Understanding JavaScript Closures",
        body: "A closure is the combination of a function and the lexical environment within which that function was declared.",
        author: "Alice Johnson",
        createdAt: new Date('2023-03-22'),
    }
];
