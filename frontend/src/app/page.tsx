// import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Welcome to the TCM Frontend</h1>
        <Link href="/auth">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Admin Login
          </button>
        </Link>
    </div>
  );
}
