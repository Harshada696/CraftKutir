import "./globals.css";
import { Caveat } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
      <nav className="bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)] relative z-50">
  <div className="max-w-7xl mx-auto px-10 h-[110px] flex items-center justify-between">
    
    {/* LOGO */}
    <img
      src="/logo.jpeg"
      alt="CraftsKutir"
      className="h-[100px] w-auto"
    />

    {/* MENU */}
    <div className="flex gap-10 text-[18px] font-medium text-black">
      <a className="text-blue-600">Home</a>
      <a>About</a>
      <a>Cart</a>
    </div>

  </div>
</nav>




        {children}

        
      </body>
    </html>
  );
}
