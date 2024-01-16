"use client";
import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <div>
        <h2>comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="pt-2 ps-5 pb-2">
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
