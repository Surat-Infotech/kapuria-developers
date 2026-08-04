import Section from "@/components/ui/section";

export default function CheckpointsSection() {
  return (
    <Section
      bg="none"
      spacing="none"
      className="border-t border-b border-[#EBC37F] bg-[#071521] py-32 md:py-50"
    >
      {/* The numeral and the sentence read as one line-up, centred together
          rather than pinned to the container edges. */}
      <div className="mx-auto flex max-w-915 flex-col items-center gap-8 md:flex-row md:gap-32 lg:gap-40">
        {/* Decorative — the same figure is spelled out in the sentence beside it. */}
        <p
          aria-hidden
          className="text-gold-300 font-playfair -mt-10 shrink-0 pb-27 text-[130px]/[150px] italic"
        >
          115
        </p>

        <p className="text-center text-[18px]/[26px] font-medium text-white/60 md:text-start md:text-[22px]/[30px] lg:text-[26px]/[34px]">
          Across this entire process, your home is measured against{" "}
          <strong className="font-medium text-white">
            115 individual checkpoints
          </strong>{" "}
          — from the first soil test to the final audit.
        </p>
      </div>
    </Section>
  );
}
