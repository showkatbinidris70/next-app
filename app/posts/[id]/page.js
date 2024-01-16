import Comments from "@/app/components/Comments";
import getPost from "@/app/lib/getPost";
import getPostComments from "@/app/lib/getPostComments";
import React, { Suspense } from "react";

//   used here metadta  title and description
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  //   const post = await getPost(id);

  // dynamic comment show
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  //   const [post, commments] = await Promise.all([postPromise, commentsPromise]);
  //   console.log(commments);
  const post = await postPromise;

  return (
    <div>
      <h3 className="text-red-100">{post.title}</h3>
      <p className="p-2">{post.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
