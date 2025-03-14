import PostList from "@/components/Posts/PostList/PostList";
import { getAllPosts } from "@/queries/blog-data";

export default async function PostListPage() {
  const posts = await getAllPosts();
  return <PostList posts={posts} />;
}
