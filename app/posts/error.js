"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-red-500">Something went wrong! to fetch posts</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
