import Link from "next/link";

import { ROUTES } from "@/lib/route";

import ChevronsRightIcon from "@/assets/svgs/common/chevrons-right";

// Navy strip between the banner and the copy. The trail is derived from the
// project rather than the URL so the type segment can read "Villas" while the
// route stays flat at /our-projects/<slug>.
export default function BreadcrumbSection({ project }) {
  const trail = [
    { label: "Home", href: ROUTES.HOME },
    { label: "Our Projects", href: ROUTES.OUR_PROJECTS },
    // No route filters by type yet, so this segment is a label only.
    { label: project.typePlural },
    { label: project.name },
  ];

  return (
    <nav aria-label="Breadcrumb" className="bg-navy-800">
      <div className="mx-auto max-w-xl px-16 py-14 lg:py-20">
        <ol className="text-body-xs md:text-body flex flex-wrap items-center gap-6 font-medium sm:gap-10 lg:text-[18x]/[normal]">
          {trail.map((crumb, index) => {
            const isCurrent = index === trail.length - 1;

            return (
              <li
                key={crumb.label}
                className="flex items-center gap-6 sm:gap-10"
              >
                {index > 0 ? (
                  // The glyph spans half its 24 viewBox, so a 12px box draws
                  // it 6px wide below `sm` and the native 12px from there up.
                  // The stroke doubles on mobile to survive that halving.
                  <ChevronsRightIcon className="size-12 shrink-0 stroke-2 text-white/60 sm:size-24 sm:stroke-1" />
                ) : null}

                {crumb.href && !isCurrent ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold-300 text-white/60 transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent ? "text-white" : "text-[rgba(255,255,255,0.60)]"
                    }
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
