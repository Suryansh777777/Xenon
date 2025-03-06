import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center pt-24 pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Wave Graphic */}
      <div className="absolute inset-0 z-0 top-1/2 ">
        <Image
          src="/wave-graphic.png"
          alt="Wave background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 pt-36">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight bg-gradient-to-b from-gray-200 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Build your next idea and <br />
          <span className="bg-gradient-to-b from-indigo-200 via-purple-300 to-violet-500 bg-clip-text text-transparent">
            ship your dream site.
          </span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base ">
          Zero code, maximum speed. Make professional sites easy, fast and fun{" "}
          <br />
          while delivering best-in-class SEO, performance.
        </p>

        <Link
          href="/get-started"
          className="rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Get Started — Free
        </Link>
      </div>
    </section>
  );
}
