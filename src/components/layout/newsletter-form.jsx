"use client";

import { Button } from "@/components/ui/button";

import QuadrantIcon from "@/assets/svgs/common/quadrant";

const NewsletterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up to the newsletter provider / server action.
  };

  return (
    // No `items-center` on the row: the input relies on the default
    // align-self: stretch to pick up the button's 62px height.
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-16 sm:flex-row xl:max-w-550"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Subscribe to our newsletter..."
        className="text-navy-800 placeholder:text-navy-800/70 focus-visible:ring-gold-300 focus-visible:ring-offset-navy-800 w-full self-stretch rounded-[60px] bg-white px-16 py-8 text-[16px]/[30px] font-normal outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:py-16 lg:w-auto lg:flex-[1_0_0] xl:px-24"
      />

      <Button
        type="submit"
        variant="secondary"
        className="text-body-lg lg:text-body xl:text-body-lg w-full gap-10 rounded-[60px] px-16 py-8 font-medium tracking-[3.42px] sm:w-auto md:py-16 lg:px-16 lg:tracking-[2.66px] xl:px-24 xl:tracking-[3.42px]"
      >
        {/* The icon only appears in the mobile comp. */}
        <QuadrantIcon className="size-20 shrink-0 lg:hidden" />
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
