// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the TCM Frontend</h1>
      <p className="mt-4 text-lg">This is the main page of the frontend application.</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Admin Login
      </button>
    </div>
  );
}
