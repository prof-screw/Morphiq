import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
// import {cn} from "@/lib/utils";
import "./globals.css";
import {  ClerkProvider, SignedOut, SignInButton, SignUpButton} from '@clerk/nextjs'


const IBMPlex  = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Morphiq",
  description: "AI_powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#53565B'}
    }}>
    <html lang="en">
      <body
        className={`${IBMPlex.className} antialiased`}
      >
        
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-teal text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
          </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
