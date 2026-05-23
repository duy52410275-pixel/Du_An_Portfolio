import Link from "next/link";

type Action = {
  href: string;
  label: string;
  external?: boolean;
  secondary?: boolean;
  download?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="shell-card px-6 py-7 sm:px-8 sm:py-9">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="section-shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {description}
          </p>
          {actions?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.href}
                    href={action.href}
                    download={action.download}
                    target={action.download ? undefined : "_blank"}
                    rel={action.download ? undefined : "noopener noreferrer"}
                    className={
                      action.secondary ? "secondary-button" : "primary-button"
                    }
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={
                      action.secondary ? "secondary-button" : "primary-button"
                    }
                  >
                    {action.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}
        </div>
        {children ? <div className="section-shell">{children}</div> : null}
      </div>
    </section>
  );
}
