import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});



export default function ProductPage() {
  return (
    <main className="bg-[#FBF7F2]">

      {/* PRODUCT HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT – PRODUCT IMAGES */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden bg-white shadow-md">
            <img
              src="/a2.webp"
              alt="Product"
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["/a4.jpeg", "/a5.jpeg", "/a7.avif"].map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer hover:opacity-80 transition"
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-[120px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – PRODUCT DETAILS */}
        <div>
          <p className="text-sm text-[#C75C3A] font-medium mb-3">
            Handcrafted • Sustainable
          </p>

          <h1 className="text-4xl font-semibold text-[#2B2B2B] mb-4">
            Handcrafted Pottery Vase
          </h1>

          <p className="text-[#5F5F5F] leading-relaxed mb-6">
            This handcrafted pottery vase is made by skilled artisans using
            traditional techniques passed down through generations. Each piece
            carries a unique texture, story, and soul.
          </p>

          <div className="text-2xl font-semibold text-[#2F6D5A] mb-8">
            ₹3,200
          </div>

          <div className="flex gap-4 mb-10">
            <a href="cart"><button className="bg-[#2F6D5A] text-white px-8 py-3 rounded-md hover:bg-[#C75C3A] transition">
              Add to Cart
            </button></a>

            <button className="border border-[#2F6D5A] text-[#2F6D5A] px-8 py-3 rounded-md hover:bg-[#2F6D5A] hover:text-white transition">
              Buy Now
            </button>
          </div>

          {/* PRODUCT META */}
          <div className="border-t pt-6 space-y-3 text-sm text-[#5F5F5F]">
            <div>
              <span className="font-medium text-[#2B2B2B]">Material:</span> Clay
            </div>
            <div>
              <span className="font-medium text-[#2B2B2B]">Craft:</span> Traditional Pottery
            </div>
            <div>
              <span className="font-medium text-[#2B2B2B]">Origin:</span> Rajasthan, India
            </div>
          </div>
        </div>
      </section>

     {/* ARTISAN STORY SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6 items-start max-w-xl">
              <img src="/art.png" alt="Art Logo" className="w-60 h-auto" />
    <div className="max-w-2xl mx-auto text-center space-y-4">

  {/* Small Craft Icon */}
  <div className="flex justify-center items-center gap-2 text-[#6B3A1E]">
    <span className="text-xl">✦</span>
    <span className="uppercase text-xs tracking-[0.3em] font-medium">
      Artisan Story
    </span>
    <span className="text-xl">✦</span>
  </div>

  {/* Handwritten Text */}
 <p
  className={`text-[17px] md:text-[18px] leading-[1.6] text-[#6B3A1E] tracking-wide text-center ${cormorant.className}`}
>
  In the quiet lanes of Molela village, Ramesh shapes clay the way his family has
  for generations. Each terracotta vase is formed by hand, guided by tradition
  and the steady rhythm of the wheel.
</p>


</div>


            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src="/story.png" alt="Artisan" className="w-full h-[350px] object-cover" />
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src="/story2.png" alt="Craft" className="w-full h-[350px] object-cover" />
            </div>

            <div className="  shadow-lg p-10 space-y-4">
              <img src="/new.png" alt="Artisan" className="w-full h-[350px] object-cover" />
            </div>
          </div>

        </div>
      </section>
{/* STORY – SOUL OF THE PAGE */}
<section className="relative bg-[#FBF7F2] py-10 overflow-hidden">

  {/* TEXTURE OVERLAY */}
  <div
    className="absolute inset-0 opacity-[0.05] pointer-events-none"
    style={{
      backgroundImage: "url('/texture.png')",
      backgroundRepeat: "repeat",
    }}
  />

  {/* CONTENT */}
  <div
    className="
      relative max-w-5xl mx-auto px-6 text-center
      opacity-0 translate-y-6
      animate-fadeUp
    "
  >

    {/* LABEL */}
    <span className="inline-block mb-8 text-[11px] tracking-[0.45em] uppercase text-[#9C6B4E]">
      The Soul of the Craft
    </span>

    {/* QUOTE MARK */}
    <div className="text-[60px] leading-none text-[#6B3A1E]/15 mb-2">
      “
    </div>

    {/* STORY TEXT */}
    <p className="max-w-3xl mx-auto text-[17px] md:text-[18px] leading-[1.65] text-[#6B3A1E] font-light">
      <span className="float-left text-[50px] leading-none mr-3 mt-1 text-[#6B3A1E] font-serif">
        C
      </span>
      rafted in the quiet lanes of rural India, this pottery reflects a gentle
      harmony between earth, hands, and heritage. Each curve is shaped slowly —
      guided by patience, tradition, and the rhythm of the wheel.
      <br />
      No two pieces are ever alike. Every form carries the warmth of the kiln,
      the subtle marks of the artisan’s touch, and a story meant to be felt,
      not hurried.
    </p>

    {/* CLAY DIVIDER */}
    <div className="relative w-28 h-[2px] mx-auto my-12 overflow-hidden bg-[#6B3A1E]/20 rounded-full">
      <div className="absolute inset-0 bg-[#6B3A1E] animate-clayFlow" />
    </div>

    {/* BILINGUAL QUOTE */}
    <div className="max-w-2xl mx-auto space-y-3">
      <p className="text-[16px] italic text-[#6B3A1E]">
        “Every piece carries a part of my life.”
      </p>
      <p className="text-[15px] text-[#6B3A1E]/80">
        “हर बर्तन में मेरी मेहनत और कहानी बसती है”
      </p>
    </div>

    {/* SIGNATURE */}
    <div className="mt-8 text-[20px] text-[#6B3A1E] italic tracking-wide">
      — Ramesh
      <span className="block text-sm not-italic opacity-70 mt-1">
        Molela Village, Rajasthan
      </span>
    </div>

  </div>
</section>


      {/* RELATED PRODUCTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-12">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { img: "/a4.jpeg", title: "Woven Textile Art" },
              { img: "/a5.jpeg", title: "Wooden Decor Piece" },
              { img: "/a7.avif", title: "Handmade Basket" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <span className="text-[#C75C3A] font-medium cursor-pointer">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
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
