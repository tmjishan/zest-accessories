import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="min-h-screen text-black flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-25"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-widest">
          Smart Packaging for Garments & Beyond
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          We specialize in delivering custom cartons to Garments, Buying Houses,
          and other fast-moving industries.
        </p>
        <Link
          href="/get-quote"
          className="inline-block bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Let&#39;s Talk
        </Link>
      </div>
    </section>
  );
}
