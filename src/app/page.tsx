import Link from "next/link";

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/Blogs/thisafile">New Post</Link>
      <Link href="/Blogs/ThisisnewPost">New Post</Link>
      <Link href="/Blogs/Okthisisananothernew post">New Post</Link>
      <Link href="/Blogs/Okitisok">New Post</Link>
      <Link href="/Blogs/NewPostisok">New Post</Link>

      
    </main>
  );
}
