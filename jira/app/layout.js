import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "practicing nextjs",
  description: "feel free to use it anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className= {`${inter.className}`} suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme='dark'>
        <Header/>
         <main className="min-h-screen">
         {children}
         </main>
         <footer className="flex justify-center items-center h-16 bg-gray-800 text-white">
           <p> made by rejuan_ahamed</p>
         </footer>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
