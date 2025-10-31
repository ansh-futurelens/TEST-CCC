import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        The page you’re looking for doesn’t exist. Redirecting you to the home page...
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-full transition duration-300 cursor-pointer"
      >
        Go to Home
      </button>
    </div>
  );
}
