import { useId, useState, type FormEvent } from "react";

const links = [
  { label: "linkedin.com/in/libi-libman", href: "https://www.linkedin.com/in/libi-libman/" },
  { label: "github.com/Libi-Libman", href: "https://github.com/Libi-Libman" },
];

const linkClasses =
  "text-pink motion-safe:transition-colors hover:text-pink-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-teal-accent";

const fieldClasses =
  "border-0 bg-cream px-3 py-3 font-body text-base text-forest-dark focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[3px] focus-visible:outline-pink";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet — this just confirms receipt in the UI.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-4 grid grid-cols-1 gap-11 border-t-[6px] border-cream bg-forest-dark px-6 py-12 sm:px-12 lg:grid-cols-2"
    >
      <div>
        <h2
          id="contact-heading"
          className="m-0 mb-3 font-pixel text-[28px] font-bold text-cream sm:text-[34px]"
        >
          Leave a note at the inn
        </h2>
        <p className="m-0 mb-4 max-w-[36ch] font-body text-lg leading-relaxed text-cream-soft">
          Audits, remediation, workshops, or a full-time role. Two working
          days for a reply.
        </p>
        <p className="m-0 font-body text-base leading-loose text-cream-soft">
          <a href="mailto:libi.libman@gmail.com" className={linkClasses}>
            libi.libman@gmail.com
          </a>
          <br />
          {links.map((link) => (
            <span key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={linkClasses}
              >
                {link.label}
              </a>
              <br />
            </span>
          ))}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-forest-panel p-6 shadow-[0_0_0_4px_theme(colors.cream.DEFAULT)]"
        noValidate
      >
        <div className="grid gap-[7px]">
          <label
            htmlFor={nameId}
            className="font-mono text-[11px] font-bold text-cream"
          >
            YOUR NAME
          </label>
          <input id={nameId} name="name" type="text" required className={fieldClasses} />
        </div>
        <div className="grid gap-[7px]">
          <label
            htmlFor={emailId}
            className="font-mono text-[11px] font-bold text-cream"
          >
            EMAIL
          </label>
          <input id={emailId} name="email" type="email" required className={fieldClasses} />
        </div>
        <div className="grid gap-[7px]">
          <label
            htmlFor={messageId}
            className="font-mono text-[11px] font-bold text-cream"
          >
            MESSAGE
          </label>
          <textarea
            id={messageId}
            name="message"
            rows={4}
            required
            className={`${fieldClasses} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="
            justify-self-start border-0 bg-pink px-[22px] py-4 font-mono text-[13px] font-bold text-forest-dark
            motion-safe:transition-colors
            hover:bg-pink-hover
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[7px] focus-visible:outline-cream
          "
        >
          SEND MESSAGE
        </button>
        <p role="status" aria-live="polite" className="m-0 font-body text-sm text-cream-soft">
          {submitted &&
            "Thanks — your note has been noted. I'll reply within two working days."}
        </p>
      </form>
    </section>
  );
}
