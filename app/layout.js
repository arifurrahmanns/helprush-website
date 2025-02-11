import { Inter } from "next/font/google";
import "./app.scss";
import Link from "next/link";
import { Icon } from "@iconify/react";
import NavMenu from "@/components/ui/NavMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  var currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        <header id="mainHeader" className="bg-theme py-5 text-white">
          <div className="container">
            <div className="flex  items-center">
              <Link href="/" className="logo">
                <div className="flex items-center">
                  <img src="/img/Outlook-waxceeoc.png" alt="" />
                  HelpRush
                </div>
              </Link>
              <NavMenu />
            </div>
          </div>
        </header>
        {children}

        <footer id="footer" className="bg-theme pt-10 lg:pt-20 text-sm text-white">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-5">
              <div className="col-span-2 lg:col-span-2 mb-5 lg:mb-0">
                <Link href="/" className="footerLogo">
                  <div className="flex items-center">
                    <img src="/img/Outlook-waxceeoc.png" alt="" />
                    HelpRush
                  </div>
                </Link>
                <p className="mt-2">
                  Banao Life Simple
                </p>
              </div>
              <div >
                <h3 className="text-lg font-semibold">
                  Company
                </h3>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Investors</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
                <h3 className="text-lg mt-8 font-semibold">
                  Products
                </h3>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>
                    <a href="#">Hire</a>
                  </li>
                  <li>
                    <a href="#">Serve</a>
                  </li>
                  <li>
                    <a href="#">HelpRush for Business</a>
                  </li>
                  <li>
                    <a href="#">Partner with HelpRush</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Legal & Policies
                </h3>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>
                    <a href="#">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Anti-discrimination Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund & Cancellation Policy</a>
                  </li>
                  <li>
                    <a href="#">Provider Agreement</a>
                  </li>
                </ul>
                <h3 className="text-lg mt-8 font-semibold">
                  Resources
                </h3>
                <ul className="mt-2 flex flex-col gap-2">
                  <li>
                    <a href="#">How it works </a>
                  </li>
                  <li>
                    <a href="#">Pricing & Fees</a>
                  </li>
                  <li>
                    <a href="#">Provider Levels </a>
                  </li>

                </ul>
              </div>
              <div className="grid col-span-2 lg:col-span-1 mt-8 lg:mt-0 grid-cols-2 lg:block">
                <div>
                  <h3 className="text-lg font-semibold">
                    Follow us
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    <li>
                      <a href="#" className="flex gap-1 items-center"><Icon icon="mingcute:linkedin-fill" width="24" height="24" />Linkedin</a>
                    </li>
                    <li>
                      <a href="#" className="flex gap-1 items-center"><Icon icon="mingcute:social-x-fill" width="24" height="24" /> X</a>
                    </li>
                    <li>
                      <a href="#" className="flex gap-1 items-center"><Icon icon="mingcute:instagram-line" width="24" height="24" /> Instagram</a>
                    </li>
                    <li>
                      <a href="#" className="flex gap-1 items-center"><Icon icon="qlementine-icons:facebook-fill-16" width="22" height="22" /> Facebook</a>
                    </li>
                    <li>
                      <a href="#" className="flex gap-1 items-center"><Icon icon="line-md:youtube-filled" width="24" height="24" />YouTube</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg lg:mt-8 font-semibold">
                    Products
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Provider Onboarding Guide </a>
                    </li>
                    <li>
                      <a href="#">Contact Support</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="py-5 lg:py-8 border-t mt-8">
            <div className="container">
              <div className="flex flex-col-reverse lg:flex-row gap-3 justify-between">
                <p>
                  &copy; {currentYear} HelpRush. All  Rights Reserved.
                </p>
                <div className="flex gap-5">
                  <a href="#">Accessibility </a>
                  <a href="#">Website use policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
