import type { IPost } from "../types/post.types";


export const getPosts = async (): Promise<IPost[]> => {
     const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}