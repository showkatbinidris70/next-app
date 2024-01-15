import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog One",
      description: "This is blog one description",
    },
    {
      id: 2,
      title: "Blog Two",
      description: "This is blog two description",
    },
    {
      id: 3,
      title: "Blog Threee",
      description: "This is blog threee description",
    },
  ];
  return (
    <div>
      <main className="p-5">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}