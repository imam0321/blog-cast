import Image from "next/image";
import Link from "next/link";


export default function LatesPost({ post }) {
  return (
    <Link href={`/blog`}>
      <article className="mt-4">
        <h3 className="text-xl font-semibold">{post?.title}</h3>
        <p className="text-gray-500">
          posted on {post?.publishedAt}
        </p>
        <Image
          alt={post?.title}
          className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          width={600}
          height={600}
          src={post?.coverImage?.url}
        />
        <p className="mt-4 text-gray-700">{post?.brief}</p>
      </article>
    </Link>
  )
}
