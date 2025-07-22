import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" text-black py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left md:pl-13">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Smart Packaging for Garments & Beyond
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700">
            We specialize in delivering custom cartons to Garments, Buying
            Houses, and other fast-moving industries.
          </h2>
          <Link
            href="/get-quote"
            className="inline-block bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold px-6 py-3 rounded transition duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/parcels-2484036_640.png"
            alt="Packaging Showcase"
            width={1200}
            height={1200}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
