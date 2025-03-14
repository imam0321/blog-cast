import PostDetails from "@/components/Posts/PostDetails/PostDetails";
import { getPost } from "@/queries/blog-data";

export default async function PostDetailsPage({ params: { slug } }) {
  const post = await getPost(slug);

  return (
    <>
      <PostDetails post={post} />
    </>
  );
}
