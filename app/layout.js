import "./globals.css";
// import Navbar from "@/Components/layout/Navbar";

export const metadata = {
  title: "Spacefold — The Operating System for Living Spaces",
  description: "AI-powered spatial commerce platform by iDecorwala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0b0b] text-white antialiased">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}