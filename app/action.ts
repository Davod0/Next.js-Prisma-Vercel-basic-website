"use server"

import { db } from "@/prisma/db";

export async function CreatePost(formData: FormData) {
    await db.post.create({
        data: {
            title: formData.get('title') as string,
            body: formData.get('body') as string,
            author: formData.get('author') as string,
            createdAt: new Date(),
        },
    });
}