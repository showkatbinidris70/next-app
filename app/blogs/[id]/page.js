import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
  const { id } = params;
  if (id === "4") {
    notFound();
  }
  return (
    <div>
      <main className="p-5">
        <p>This blog id is {id}</p>
      </main>
    </div>
  );
}
