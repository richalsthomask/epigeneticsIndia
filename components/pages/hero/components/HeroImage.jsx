import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Food", "Mind", "Cognition"];

export default function HeroImage({}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative bg-yellow-50 min-h-screen">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="flex flex-row gap-4 font-bold text-5xl text-yellow-900 md:text-6xl">
                Better
                <TextTransition direction="down">
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h1>

              <p className="mt-8 text-gray-700 lg:w-10/12"></p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
