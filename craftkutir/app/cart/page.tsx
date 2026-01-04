import Link from "next/link";

export default function CartPage() {
  return (
    <main className="bg-[#FBF7F2] min-h-screen">

      {/* ================= CART HERO ================= */}
      <section
        className="relative w-full flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('cart-hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          minHeight: "360px",
        }}
      >
        <div className="relative max-w-3xl px-6 -translate-y-24">
          <h1 className="text-[42px] md:text-[32px] font-semibold text-[#2B2B2B] mb-4">
            Almost Yours ✨
          </h1>
          <p className="text-[#4B4B4B] text-[17px] leading-relaxed">
            Each item in your cart is handcrafted by skilled artisans.
            Your purchase supports tradition.
          </p>
        </div>
      </section>

      {/* ================= CART CONTENT ================= */}
      <section className="bg-white -translate-y-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ================= LEFT SIDE ================= */}
            <div className="lg:col-span-2 space-y-14">

              {/* CART ITEM */}
              <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col sm:flex-row gap-6">

                <img
                  src="/a2.webp"
                  alt="Product"
                  className="w-full sm:w-36 h-36 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-[18px] font-medium text-[#2B2B2B] mb-2">
                    Handcrafted Terracotta Vase
                  </h3>

                  <p className="text-sm text-[#6A6A6A] mb-6">
                    Color: Natural Clay
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center border border-[#D6D3CE] rounded-md h-10">
                      <button className="px-3 text-lg">−</button>
                      <span className="px-4 text-sm">1</span>
                      <button className="px-3 text-lg">+</button>
                    </div>

                    <div className="text-[15px] font-medium text-[#2F6D5A]">
                      ₹1,499
                    </div>
                  </div>

                  <button className="mt-5 text-sm text-[#C75C3A] hover:underline">
                    Remove
                  </button>
                </div>
              </div>

              {/* ================= ADD MORE PRODUCTS ================= */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#2B2B2B] mb-6">
                  Add more handcrafted pieces
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* PRODUCT 1 */}
                  <div className="border rounded-xl p-5 flex gap-4 hover:shadow-sm transition">
                    <img
                      src="p.jpg"
                      className="w-20 h-20 rounded-lg object-cover"
                      alt=""
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#2B2B2B]">
                        Clay Coffee Mug
                      </p>
                      <p className="text-sm text-[#2F6D5A] mt-1">
                        ₹699
                      </p>
                      <button className="mt-3 text-sm text-[#2F6D5A] underline">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* PRODUCT 2 */}
                  <div className="border rounded-xl p-5 flex gap-4 hover:shadow-sm transition">
                    <img
                      src="p2.jpg"
                      className="w-20 h-20 rounded-lg object-cover"
                      alt=""
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#2B2B2B]">
                        Earthen Water Pot
                      </p>
                      <p className="text-sm text-[#2F6D5A] mt-1">
                        ₹1,099
                      </p>
                      <button className="mt-3 text-sm text-[#2F6D5A] underline">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                </div>
 <div className="mt-12 bg-[#FFFDF9] rounded-2xl px-8 py-7 min-h-[190px]
                flex items-center gap-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)]
                border border-[#EFE8DD] relative overflow-hidden
                hover:-translate-y-[2px] transition duration-300">

  {/* Soft paper texture */}
  <div className="absolute inset-0 opacity-[0.03]
                  bg-[url('/paper-texture.png')] pointer-events-none" />

  {/* Icon */}
  <div className="relative z-10 flex-shrink-0">
    <div className="w-16 h-16 rounded-full bg-[#FBF3E8]
                    flex items-center justify-center">
      <img
        src="/a.png"
        className="w-9 h-9"
        alt=""
      />
    </div>
  </div>

  {/* Text */}
  <div className="relative z-10">
    <p className="text-[15px] font-medium text-[#2B2B2B] leading-snug">
      Crafted by Indian artisans
    </p>

    <p className="text-[14px] text-[#6A6A6A] leading-relaxed mt-1">
      Every purchase directly supports traditional craftsmanship
      and generational skills.
    </p>

    {/* Artisan signature */}
    <p className="mt-3 text-[12px] italic text-[#9C7A4B]">
      — made with care, not machines
    </p>
  </div>
</div>

              </div>

            </div>
            

            {/* ================= RIGHT SIDE ================= */}
            <div className="bg-white rounded-2xl shadow-sm p-10 h-fit">

              {/* PROMO */}
              <div className="mb-10">
                <h3 className="text-[15px] font-medium text-[#2B2B2B] mb-4">
                  Enter Promo code
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    className="flex-1 border border-[#2B2B2B] px-4 py-3 text-sm focus:outline-none"
                  />
                  <button className="bg-[#2F6D5A] text-white px-8 text-sm hover:bg-[#234F43] transition">
                    Apply
                  </button>
                </div>
              </div>

              {/* SUMMARY */}
              <h2 className="text-[20px] font-semibold text-[#2B2B2B] mb-8">
                Order Summary
              </h2>

              <div className="space-y-5 text-[#5F5F5F]">
                <div className="flex justify-between">
                  <span>Subtotal (1 item)</span>
                  <span>₹1,499</span>
                </div>

                <div className="flex justify-between text-[#2F6D5A]">
                  <span>Discount</span>
                  <span>−₹100</span>
                </div>

                <div className="flex justify-between border-t pt-5 text-[15px] font-medium text-[#2B2B2B]">
                  <span>Total</span>
                  <span>₹1,399</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#2F6D5A] text-white py-3 text-[15px] hover:bg-[#234F43] transition">
                Proceed to Checkout
              </button>

              <Link
                href="/"
                className="block text-center mt-2 text-sm text-[#6B3A1E] hover:underline"
              >
                ← Continue Shopping
              </Link>
              
              <img
                src="girl.png"
                alt=""
                className="-mt-0 mx-auto w-40 h-auto"
              />
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
