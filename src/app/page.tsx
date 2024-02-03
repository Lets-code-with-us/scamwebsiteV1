import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/Blogs/65b925ed602d37a5e5d1c70a">New Post</Link>
      <Link href="/Blogs/ThisisnewPost">New Post</Link>
      <Link href="/Blogs/Okthisisananothernew post">New Post</Link>
      <Link href="/Blogs/Okitisok">New Post</Link>
      <Link href="/Blogs/NewPostisok">New Post</Link>

      
    </main>
  );
}
