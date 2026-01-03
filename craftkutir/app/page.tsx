import Image from "next/image";

import Link from "next/link";


export default function Home() {
  return (
        <main>
     {/* Hero Section */}
<section className="bg-[#FBF7F2]">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm font-medium tracking-wide text-[#C75C3A] mb-4">
        Authentic • Handmade • Sustainable
      </p>

      <h1 className="text-[42px] leading-tight text-[#2B2B2B] mb-6 font-semibold">
        Where Every Craft <br />
        Tells a Human Story
      </h1>

      <p className="text-[#5F5F5F] mb-8 max-w-md leading-relaxed">
        Discover handcrafted pieces made by skilled artisans, carrying traditions,
        culture, and stories passed through generations.
      </p>

      <button className="
        bg-[#2F6D5A]
        text-white
        px-7
        py-3
        rounded-md
        transition
        duration-300
        hover:bg-[#C75C3A]
      ">
        Explore the Craft
      </button>
    </div>

    {/* RIGHT IMAGE CARD */}
    <div className="bg-white p-4 rounded-2xl shadow-xl">
      <img
        src="/hero.jpg"
        alt="Craft Hero"
        className="rounded-xl w-full h-[420px] object-cover"
      />
    </div>

  </div>
</section>

{/* 1st section */}

    {/* Craft Cards Section */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#2B2B2B] mb-12">
      Browse by Craft
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a2.webp"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Handcrafted Pottery
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Traditional clay art made by skilled artisans using age-old
            techniques.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

      {/* Card 2 */}
     <Link href="/product" className="block"> <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a4.jpeg"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Woven Textiles
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Beautiful fabrics woven with cultural stories and traditional
            patterns.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
          
        </div>
      </div></Link>

      {/* Card 3 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a5.jpeg"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Wooden Artifacts
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Hand-carved wooden crafts inspired by nature and heritage.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

    </div>
  </div>
</section>
{/* 2st section */}
  {/* Craft Cards Section */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#2B2B2B] mb-12">
      Browse by Store 
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/image.png"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Handcrafted Pottery
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Traditional clay art made by skilled artisans using age-old
            techniques.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

      {/* Card 2 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a5.jpeg"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Woven Textiles
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Beautiful fabrics woven with cultural stories and traditional
            patterns.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

      {/* Card 3 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a4.jpeg"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Wooden Artifacts
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Hand-carved wooden crafts inspired by nature and heritage.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

    </div>
  </div>
</section>
{/* 2st section */}
  {/* Craft Cards Section */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#2B2B2B] mb-12">
      Browse By Product 
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <Link href="/product" className="block"><div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/basket.jpeg"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Handcrafted Pottery
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Traditional clay art made by skilled artisans using age-old
            techniques.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div></Link>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a7.avif"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Woven Textiles
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Beautiful fabrics woven with cultural stories and traditional
            patterns.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/a2.webp"
          alt="Craft"
          className="w-full h-[260px] object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium text-[#2B2B2B] mb-2">
            Wooden Artifacts
          </h3>
          <p className="text-[#5F5F5F] text-sm leading-relaxed mb-4">
            Hand-carved wooden crafts inspired by nature and heritage.
          </p>
          <span className="text-[#C75C3A] font-medium cursor-pointer">
            View Details →
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="relative h-[300px] md:h-[350px] w-full">
  
  {/* Background Image */}
  <img
    src="/footer.png"
    alt="Footer Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Footer Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center">
    <div className="w-full flex flex-col md:flex-row justify-between items-center text-white text-sm md:text-base gap-6">
      
      {/* Left */}
      <div className="font-medium cursor-pointer hover:underline">
        Contact us
      </div>

      {/* Center */}
      <div className="font-medium cursor-pointer hover:underline">
        About us
      </div>

      {/* Right */}
      <div className="opacity-90">
        © 2025 CraftKutir Website
      </div>

    </div>
  </div>

</footer>



    </main>
    
  );
}
