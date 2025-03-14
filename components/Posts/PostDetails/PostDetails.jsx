import Image from "next/image";


export default function PostDetails({ post }) {
  return (
    <article className="bg-white p-3 mt-3 flex flex-col justify-center items-center">
      <Image
        alt={post?.title}
        className="rounded-lg"
        width={700}
        height={500}
        src={post?.coverImage?.url}
      />
      <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
      <h2 className="text-xl pt-3 pb-3">{post.subtitle}</h2>
      <div
        className="post-details"
        dangerouslySetInnerHTML={{ __html: post?.content?.html }}
      />
    </article>
  )
}
