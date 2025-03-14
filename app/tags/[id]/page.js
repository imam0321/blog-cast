import PostList from "@/components/Posts/PostList/PostList";
import { getAllPosts } from "@/queries/blog-data";
import Link from "next/link";

export default async function PostByTagPage({ params: { id } }) {
  const posts = await getAllPosts([id]);
  const tags = posts[0]?.node?.tags;
  const foundTag = tags.find((tag) => tag.id === id);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex pt-4 pl-4 mb-8 text-2xl">
          <p className="mr-2">
            {posts.length} posts found for the tag {foundTag?.name}
          </p>
          <span>
            {" "}|{" "}
          </span>
          <Link href="/blog" className="underline">
            See All Posts
          </Link>
        </div>
        <PostList posts={posts} />
      </div>
    </>
  );
}
