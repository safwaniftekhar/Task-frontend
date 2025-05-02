"use client";
import Image from "next/image";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function FametonicLanding() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Promotional Banner */}
      <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-extrabold text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-[Figtree]">
            <span className="text-[#00E7F9]">🚀 FRESH BEGINNINGS SALE:</span>{" "}
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          <nav className="flex items-center justify-between px-6 md:px-16 mb-6 md:mb-16">
            {/* Logo */}
            <div className="text-2xl flex font-bold">
              <Image
                src="/fametonic-logo-final.png"
                alt="Fametonic"
                width={173.12}
                height={74}
                className="h-8 md:h-12 w-auto"
              />
            </div>

            {/* Nav links (desktop only) */}
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white">
                About us
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>

            {/* Mobile menu button (hidden on desktop) */}
            <div className="flex md:hidden">
              <button className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <div className="relative flex justify-center ">
              <Image
                src="/fametonic-app.png"
                alt="Fametonic App"
                width={1000}
                height={800}
                className="relative z-10"
              />
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12  md:px-16 md:py-20 bg-black text-white overflow-hidden">
            <div className="col-span-12 md:col-span-6 z-10 relative">
              <h1 className="font-[urbanist] font-extrabold text-[25px] leading-[100%] tracking-[0] text-center align-middle sm:text-left sm:align-baseline md:text-[35px] mb-4">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              <h1
                className="md:w-[80%] sm:w-full font-[urbanist] text-cyan-400 font-extrabold text-[25px] leading-[100%] tracking-[0] text-center align-middle sm:text-left sm:align-baseline md:text-[35px] mb-4"
                style={{ filter: "drop-shadow(2px 2px 2px #FC004E)" }}
              >
                Discover your way to success with Fametonic:
              </h1>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400 ">✨</div>
                  <span>
                    Start growing your influence right away—no waiting required!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400  ">✨</div>
                  <span>
                    Create viral TikToks and Reels step by step with
                    easy-to-follow formats
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span>Use a Personal AI Writer to boost your content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400 ">✨</div>
                  <span>
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </span>
                </li>
              </ul>

              <div className="md:hidden">
                <p className="text-xs text-gray-500 mt-8">
                  By clicking "Get Started" you agree with Terms and Conditions,
                  Privacy Policy, Subscription Agreement.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Fametonic © 2023 Rights Reserved
                </p>
              </div>

              <div className="space-y-2">
                <button
                  className="w-[350px] h-[40px] bg-gradient-to-r !bg-red-500 text-white font-[urbanist] px-[40px] py-[8px] rounded-[10px] flex items-center gap-[10px] hover:opacity-90 transition-opacity justify-center"
                  style={{ filter: "drop-shadow(2px 2px 2px #00E7F9)" }}
                >
                  <span className="font-[urbanist] font-bold text-[20px] leading-[100%] tracking-[0] align-middle">
                    GET STARTED
                  </span>
                  <ChevronRight className="h-4 w-4 ml-1" strokeWidth={5} />
                </button>
                <p className="text-xs text-gray-400 text-left">
                  1-minute quiz for personalized insights
                </p>
              </div>

              <div className="hidden sm:block">
                <p className="text-xs text-gray-500 mt-8">
                  By clicking "Get Started" you agree with Terms and Conditions,
                  Privacy Policy, Subscription Agreement.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Fametonic © 2023 Rights Reserved
                </p>
              </div>
            </div>

            {/* Right Column - Overlapping Image */}
            <div className="hidden md:block absolute  right-0 top-0 w-1.5/2 h-full items-center justify-end pr-16 pointer-events-none">
              <Image
                src="/fametonic-app.png"
                alt="Fametonic App"
                width={1000}
                height={800}
                className="w-auto max-h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
