"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import contactBg from "@/assets/images/home/bg-contact.webp";
import contactUs from "@/assets/images/home/contact-us.webp";
import QuadrantIcon from "@/assets/svgs/common/quadrant";

// Shared by both text inputs and the textarea.
const FIELD =
  "border-gold-400 bg-gold-400/10 text-navy-800 placeholder:text-navy-800/60 focus-visible:ring-gold-400 w-full rounded-[12px] border px-24 py-16 text-[16px]/[30px] font-medium outline-none focus-visible:ring-2 lg:text-[18px]/[30px]";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up to the enquiry endpoint / server action.
  };

  // The artwork rides as a CSS background rather than an <Image> child — the
  // section's container is width-capped, so a child could not bleed across —
  // and the URL comes in as a custom property because its hashed path isn't
  // known at build time.
  return (
    <Section
      bg="cream"
      className="relative overflow-hidden bg-(image:--bg-contact) bg-cover bg-center bg-no-repeat py-32 sm:py-64 lg:py-120"
      style={{
        "--bg-contact": `url(${contactBg.src})`,
      }}
    >
      <div className="relative flex flex-col items-center gap-36 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-24 sm:gap-29 lg:flex-1">
          <div className="flex w-full flex-col items-start gap-16">
            <h2 className="lg:text-display text-navy-800 text-[32px]/[40px] font-medium sm:text-[48px]/[56px]">
              Lets discuss{" "}
              <span className="font-playfair text-gold-400 italic">
                your space.
              </span>
            </h2>

            <hr className="text-gold-400 w-34" />

            <p className="md:text-body sm:text-body-sm text-navy-800/60 text-[12px]/[18px] font-medium">
              Whether it&rsquo;s your family&rsquo;s next home or your
              company&rsquo;s next premises, we&rsquo;ll walk you through
              exactly how we build - from the soil up.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-start gap-35"
          >
            <div className="flex w-full flex-col gap-20">
              <div className="flex w-full flex-col gap-20 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="contact-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Full Name"
                    className={FIELD}
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className={FIELD}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Write a Message..."
                  className={`${FIELD} h-160 resize-none`}
                />
              </div>
            </div>

            <Button type="submit" className="w-full gap-10 sm:w-auto">
              <QuadrantIcon className="text-gold-300 size-18 shrink-0" />
              Book <span className="hidden sm:block">Free</span> Consultation
            </Button>
          </form>
        </div>

        <Image
          src={contactUs}
          alt="Families at home in a Kapuria residence"
          width={416}
          height={565}
          className="hidden w-full max-w-320 shrink-0 drop-shadow-[0_13px_23.5px_rgba(0,0,0,0.25)] lg:block lg:max-w-416"
        />
      </div>
    </Section>
  );
}
