import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
// import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animations",
  description: "A collection of varities of Animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    return (
      <html lang="en">
        <body
          className={cn(
            "relative flex min-h-screen flex-col bg-background font-sans antialiased",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1">
              <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:max-w-[1700px]">
                <Sidebar />
                {/* <Separator orientation="vertical" /> */}
                {/* <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"> */}
                  <div className="mx-auto w-full min-w-0">
                    {children}
                  </div>
                {/* </main> */}
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    );
}
