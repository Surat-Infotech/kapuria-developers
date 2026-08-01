"use client";

import {
  CONTACT_DETAILS,
  CONTACT_INTRO,
  ENQUIRY_TOPICS,
  PHONE_COUNTRY_CODES,
} from "@/config/contact";
import { SOCIAL_LINKS } from "@/config/footer";

import { FooterLogo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import ChevronDownIcon from "@/assets/svgs/common/chevron-down";
import SendIcon from "@/assets/svgs/common/send";

const EYEBROW = "Support";

const DESCRIPTION =
  "Questions about your villa, documents or handover? Your project team usually replies within one business day.";

const LABEL = "mb-8 block text-body-xs font-semibold text-[#6A7680]";

// Shared by the text inputs, the selects and the textarea. `block` matters:
// form controls are inline-block by default, so the parent keeps a line box
// and leaves a sliver of descender space under the control — most visible
// under the textarea.
const FIELD =
  "block w-full rounded-[11px] border border-[#D9D2C6] bg-white px-16 py-9 text-body-xs font-normal text-[#0B2233] outline-none transition-colors duration-200 placeholder:text-navy-800/40 focus-visible:border-gold-400 focus-visible:ring-2 focus-visible:ring-gold-400/25 md:text-body-sm";

// Icon tiles — the contact rows and the social links share the same chip.
const TILE =
  "flex size-44 shrink-0 items-center justify-center rounded-[12px] bg-[#1A4059]";

const DETAIL_LABEL =
  "text-[11px]/[16px] font-semibold tracking-[1.6px] text-white/45 uppercase";

export default function ContactFormSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up to the enquiry endpoint / server action.
  };

  return (
    <div className="relative bg-[#FAF6F2] pt-72 lg:pt-124">
      <span
        aria-hidden
        className="bg-navy-700 absolute inset-x-0 bottom-0 hidden h-210 lg:block"
      />
      <Section
        bg="transparent"
        spacing="none"
        className="relative pt-32 pb-32 lg:pt-64 lg:pb-120"
      >
        <p className="text-eyebrow text-gold-400 mb-8 uppercase">{EYEBROW}</p>

        <SectionHeader
          className="mb-32"
          heading={
            <>
              Get{" "}
              <span className="font-playfair text-gold-400 italic">
                in touch
              </span>
            </>
          }
          classNames={{
            heading:
              "text-[30px]/[40px] font-medium sm:text-[44px]/[452px] md:text-[56px]/[64px] lg:text-display",
            rule: "my-8 lg:my-16",
            description:
              "mt-0 text-body-sm font-normal rgba(8,34,53,0.60) sm:text-body",
          }}
          description={DESCRIPTION}
        />

        <div className="grid overflow-hidden rounded-[20px] shadow-[0_20px_60px_0_rgba(8,34,53,0.08)] lg:grid-cols-[1fr_384px] lg:rounded-3xl">
          {/* ── Enquiry form ─────────────────────────────────────── */}
          <div className="bg-surface p-16 md:p-24 lg:p-32">
            <form onSubmit={handleSubmit} className="flex flex-col gap-16">
              <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={LABEL}>
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Anil Ambani"
                    className={FIELD}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={LABEL}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="anilambani@gmail.com"
                    className={FIELD}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={LABEL}>
                    Phone number
                  </label>

                  <div className="flex gap-8">
                    {/* Centred and chevron-less: the box reads as a prefix on
                        the number beside it, not as a field of its own. */}
                    <label htmlFor="contact-dial-code" className="sr-only">
                      Country dialling code
                    </label>
                    <select
                      id="contact-dial-code"
                      name="dialCode"
                      defaultValue={PHONE_COUNTRY_CODES[0].code}
                      className={`${FIELD} w-full max-w-104 shrink-0 cursor-pointer appearance-none px-16 text-center`}
                    >
                      {PHONE_COUNTRY_CODES.map(({ code, label, flag }) => (
                        <option key={code} value={code}>
                          {flag} {code}
                        </option>
                      ))}
                    </select>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel-national"
                      placeholder="98765 43210"
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className={LABEL}>
                    Regarding
                  </label>

                  <div className="relative">
                    <select
                      id="contact-topic"
                      name="topic"
                      defaultValue={ENQUIRY_TOPICS[0]}
                      className={`${FIELD} cursor-pointer appearance-none pr-48`}
                    >
                      {ENQUIRY_TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>

                    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-16 size-16 -translate-y-1/2" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <label htmlFor="contact-message" className={LABEL}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Hi team, I'd like to schedule a site visit for Villa 12 next week and confirm the possession timeline."
                    className={`${FIELD} h-124 resize-none`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-navy-800/50 text-body-xs">
                  We&rsquo;ll reply to your registered email.
                </p>

                <button
                  type="submit"
                  className="text-body-lg bg-navy-800 flex w-full items-center justify-center gap-8 rounded-[60px] px-24 py-8 font-medium tracking-[3.42px] text-white uppercase sm:w-auto lg:py-20 lg:text-[18px]/[normal]"
                >
                  <SendIcon className="text-gold-300 size-16 shrink-0" />
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* ── Project desk ─────────────────────────────────────── */}
          <div className="bg-[#0E2C47] bg-[linear-gradient(180deg,#0A273F_0%,#001B2F_100%)] px-16 pt-32 pb-26 lg:p-32">
            <div className="lg:max-w-303">
              <FooterLogo className="h-40 w-auto" />

              <p className="text-muted-foreground text-body-sm mt-8 font-medium">
                {CONTACT_INTRO}
              </p>

              <ul className="mt-16 flex max-w-290 flex-col gap-16 sm:max-w-full lg:mt-24 lg:gap-24">
                {CONTACT_DETAILS.map(({ label, value, href, Icon }) => (
                  <li key={label} className="flex items-start gap-14">
                    <span className={TILE}>
                      <Icon className="text-gold-300 size-19" />
                    </span>

                    <div className="min-w-0">
                      <p className={DETAIL_LABEL}>{label}</p>

                      {href ? (
                        <a
                          href={href}
                          className="hover:text-gold-300 text-body-sm mt-4 block font-semibold break-words text-white transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-body-xs mt-4 text-[rgba(255,255,255,0.85)]">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className={`${DETAIL_LABEL} mt-16 lg:mt-24`}>Follow us</h2>

              <ul className="mt-8 flex items-center gap-8 lg:gap-10">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className={`${TILE} hover:text-gold-300 size-40 rounded-[11px] border border-[#2A4256] text-white transition-colors duration-200 hover:bg-white/15`}
                    >
                      <Icon className="size-18" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
