import React from "react";
import getAllPosts from "../lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div className="p-5">
      <h1>All Posts</h1>
      <ul className="pt-5">
        {posts.map((post) => (
          <li key={post.id} className="text-green-700">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
