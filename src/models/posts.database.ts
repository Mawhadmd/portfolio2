export interface Post {
    id: string;
    title: string;
    content: string;
    created_at: Date;
    updatedAt?: Date;
    catagory?: string;
    thumbnail: string;
}

export const posts: Post[] = [];