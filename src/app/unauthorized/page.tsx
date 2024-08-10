import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-2xl ">Unauthorized</h1>
      <p>You are not authorized to view this page.</p>
      <Link	 className="mt-4" href="/about">Redirect to Homepage --&gt;</Link>
    </div>
  );
}
