import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/section";

import blogPost1 from "@/assets/images/blogs/blog-post-1.webp";
import blogPost2 from "@/assets/images/blogs/blog-post-2.webp";
import blogPost3 from "@/assets/images/blogs/blog-post-3.webp";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";

const EXCERPT =
  "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing renewable materials and energy-efficient systems…";

const POSTS = [
  { id: "more-1", image: blogPost1 },
  { id: "more-2", image: blogPost2 },
  { id: "more-3", image: blogPost3 },
  { id: "more-4", image: blogPost2 },
  { id: "more-5", image: blogPost3 },
  { id: "more-6", image: blogPost1 },
];

const META = ["10 mins", "Sustainability", "10th June, 2026"];

export default function MoreArticles() {
  return (
    <Section
      bg="transparent"
      spacing="none"
      className="border-gold-400 border-t border-b bg-[#F4EFE6]/15 py-32 lg:py-64"
    >
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-navy-800 text-[22px]/[30px] font-semibold lg:text-[36px]/[44px]">
          Enjoy this article?
        </h2>
        <p className="text-navy-800/60 text-[12px]/[18px] font-medium lg:text-[16px]/[24px]">
          Check out some more from our talented team!
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-32 sm:grid-cols-2 sm:gap-x-16 lg:mt-36 lg:grid-cols-3 lg:gap-24">
        {POSTS.map(({ id, image }) => (
          <article key={id} className="flex flex-col items-start gap-16">
            <Link
              href=""
              className="focus-visible:ring-gold-400 w-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <Image
                src={image}
                alt=""
                width={343}
                height={210}
                className="h-210 w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </Link>

            <div className="flex w-full flex-col items-start gap-8">
              <h3 className="text-navy-800 text-[18px]/[26px] font-semibold sm:text-[16px]/[24px]">
                <Link
                  href=""
                  className="focus-visible:ring-gold-400 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                >
                  Building Better Futures:{" "}
                  <span className="font-normal lg:font-medium">
                    Constructing Community Homes for a Brighter Tomorrow
                  </span>
                </Link>
              </h3>

              <p className="text-navy-800/60 line-clamp-3 text-[12px]/[18px] font-normal sm:text-[14px]/[22px]">
                {EXCERPT}
              </p>

              {/* Chip bar — dots separate the values on mobile, hairlines
                  inside a bordered box from `lg` up. */}
              <div className="border-navy-800/5 flex flex-wrap items-center gap-8 rounded-md lg:border-[0.75px] lg:bg-white lg:px-16 lg:py-7">
                {META.map((value, index) => (
                  <div key={value} className="flex items-center gap-8">
                    <span className="text-navy-800/60 text-body-xs font-normal whitespace-nowrap sm:text-[14px]/[22px]">
                      {value}
                    </span>

                    {index < META.length - 1 && (
                      <>
                        <span
                          aria-hidden
                          className="bg-navy-800/10 hidden h-18 w-px lg:block"
                        />
                        <span className="bg-navy-800/60 size-3 rounded-2xl lg:hidden"></span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
