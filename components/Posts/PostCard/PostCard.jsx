import { getFormattedDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export default function PostCard({post}) {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blog/${post?.slug}`}>
        <Image
          alt={post?.title}
          className="object-cover w-full h-auto"
          width={500}
          height={500}
          src={post?.coverImage?.url}
        />
        <h3 className="text-xl font-semibold p-4">{post?.title}</h3>
        <p className="text-gray-500 p-4">
          Posted on {getFormattedDate(post?.publishedAt)}
        </p>
        <p className="mt-2 text-gray-700 p-4">{post?.brief}</p>
      </Link>
    </div>
  )
}
