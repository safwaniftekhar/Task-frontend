"use client";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
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
      <div className="w-full bg-gradient-to-r from-pink-600 to-pink-500 py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg">🎉</span>
          <span className="font-medium text-sm md:text-base">
            FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start your
            journey today!
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-6 md:mb-16">
            <div className="text-2xl font-bold">
              <Image
                src="/fametonic-logo-final.png"
                alt="Fametonic"
                width={120}
                height={40}
                className="h-8 md:h-12 w-auto"
              />
            </div>
            <div className="md:flex gap-6 hidden">
              <a href="#" className="text-gray-300 hover:text-white">
                About us
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
            <button className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </nav>

          {/* Hero Section - Mobile Layout */}
          <div className="md:hidden">
            {/* Phone Image with glowing effect */}
            <div className="relative flex justify-center mb-6">
              {/* Glowing Ring Effect */}

              {/* Phone Image */}
              <Image
                src="/fametonic-app.png"
                alt="Fametonic App"
                width={240}
                height={480}
                className="relative z-10"
              />
            </div>

            {/* Text Content */}
            {/* <div>
              <h1 className="text-2xl font-bold leading-tight mb-2">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className="text-xl text-cyan-400 font-medium mb-4">
                Discover your way to success with Fametonic:
              </h2>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span className="text-sm">
                    Start growing your influence right away—no waiting required!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span className="text-sm">
                    Create viral TikToks and Reels step by step with
                    easy-to-follow formats
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span className="text-sm">
                    Use a Personal AI Writer to boost your content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span className="text-sm">
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </span>
                </li>
              </ul>

              <p className="text-xs text-gray-400 mb-8">
                By clicking "Get Started" you agree with Terms and Conditions,
                Privacy Policy, Subscription Agreement.
                <br />
                <span className="block mt-1">
                  Fametonic © 2023 Rights Reserved
                </span>
              </p>

              <div className="space-y-2">
                <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity w-full justify-center">
                  GET STARTED <ArrowRight className="h-4 w-4 ml-1" />
                </button>
                <p className="text-xs text-cyan-400 text-center">
                  1-minute quiz for personalized insights
                </p>
              </div>
            </div> */}
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 px-6 md:px-16 py-12 bg-black text-white overflow-hidden">
            {/* Left Column - Text Content */}
            <div className="col-span-12 md:col-span-6 z-10 relative">
              <h1 className="text-4xl sm:text-3xl font-400 leading-tight mb-4">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className="text-4xl text-cyan-400 font-medium mb-8">
                Discover your way to success with Fametonic:
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span>
                    Start growing your influence right away—no waiting required!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
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
                  <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                  <span>
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </span>
                </li>
              </ul>

              <div className="space-y-2">
                <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity w-auto justify-center">
                  GET STARTED <ArrowRight className="h-4 w-4 ml-1" />
                </button>
                <p className="text-xs text-gray-400 text-left">
                  1-minute quiz for personalized insights
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-8">
                By clicking "Get Started" you agree with Terms and Conditions,
                Privacy Policy, Subscription Agreement.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Fametonic © 2023 Rights Reserved
              </p>
            </div>

            {/* Right Column - Overlapping Image */}
            <div className="absolute right-0 top-0 md:block w-1.25/2 h-full flex items-center justify-end pr-16 pointer-events-none">
              <Image
                src="/fametonic-app.png"
                alt="Fametonic App"
                width={800}
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
