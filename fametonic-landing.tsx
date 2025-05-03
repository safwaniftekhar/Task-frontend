import Image from "next/image";
import { ChevronRight, Menu } from "lucide-react";

export default function FametonicLanding({ features }: { features: string[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-extrabold text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-[Figtree]">
            <span className="text-[#00E7F9]">🚀 FRESH BEGINNINGS SALE:</span>{" "}
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-between px-6 md:px-16 mb-6 md:mb-16">
            <div className="text-2xl flex font-bold">
              <Image
                src="/fametonic-logo-final.png"
                alt="Fametonic"
                width={173.12}
                height={74}
                className="h-8 md:h-12 w-auto"
              />
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white">
                About us
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </nav>

          <div className="flex ml-[40%] justify-between items-center w-[60%] px-4 md:hidden">
            <nav className="flex items-center">
              <div className="text-2xl flex font-bold">
                <Image
                  src="/fametonic-logo-final.png"
                  alt="Fametonic"
                  width={173.12}
                  height={74}
                  className="h-8 w-auto"
                />
              </div>
            </nav>
            <div className="flex items-center md:hidden">
              <button className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="relative flex justify-center">
              <Image
                src="/fametonic-app.png"
                alt="Fametonic App"
                width={1000}
                height={800}
                className="relative z-10"
              />
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 md:px-16 md:py-20 bg-black text-white overflow-hidden">
            <div className="col-span-12 md:col-span-6 z-10 relative">
              <h1 className="font-[urbanist] font-extrabold text-[25px] leading-[100%] tracking-[0] text-center align-middle sm:text-left sm:align-baseline md:text-[35px] mb-4">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              <h1
                className="w-[90%]  font-[urbanist] text-cyan-400 font-extrabold text-[25px] leading-[100%] tracking-[0] text-center align-middle sm:text-left sm:align-baseline md:text-[35px] mb-4"
                style={{ filter: "drop-shadow(2px 2px 2px #FC004E)" }}
              >
                Discover your way to success with Fametonic:
              </h1>
              <ul className="space-y-4 mb-8">
                {features?.map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="min-w-5 mt-1 text-yellow-400">✨</div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="md:hidden flex flex-col items-center text-center w-full mt-8 space-y-2 text-gray-400">
                <p className="font-medium text-[12px] leading-[100%] w-[70%] tracking-normal text-center align-middle font-[Figtree]">
                  By clicking "Get Started" you agree with Terms and Conditions,
                  Privacy Policy, Subscription Terms.
                </p>
                <p className="font-medium text-[12px] leading-[100%] w-[70%] tracking-normal p-4 text-center align-middle font-[Figtree]">
                  Fametonic © 2025 All Rights Reserved.
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
                <div className="w-[350px] flex justify-center">
                  <p className="text-xs text-gray-400">
                    1-minute quiz for personalized insights
                  </p>
                </div>
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
            <div className="hidden md:block absolute right-0 top-0 w-1.5/2 h-full items-center justify-end pr-16 pointer-events-none">
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
