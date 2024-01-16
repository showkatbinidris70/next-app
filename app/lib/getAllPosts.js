export default async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",

    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!result.ok) {
    throw new Error("something went wrong to fetch posts");
  }
  return result.json();
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
