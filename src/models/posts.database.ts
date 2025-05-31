export interface Post {
    id: string;
    title: string;
    content: string;
    created_at: Date;
    updated_at?: Date;
    slug: string;
    category?: string;
    thumbnail: string;
    status: "draft" | "published";
}

export const posts: Post[] = [];