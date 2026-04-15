import { type FormEvent, useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Download, Mail, MapPin, Phone } from "lucide-react";

import { contactAvailability, contactDetails, contactPitch, personal, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const detailIconMap = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
} as const;

function ContactDetailItem({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
}) {
  const inner = (
    <>
      <div className="rounded-full border border-rose-900/10 bg-slate-900/5 p-3 text-rose-400">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">{label}</p>
        <p className="mt-1 text-sm text-slate-100">{value}</p>
      </div>
    </>
  );

  const sharedClass = "flex items-center gap-4 rounded-[22px] border border-rose-900/10 bg-white/[0.04] px-4 py-4";

  return href ? (
    <a href={href} className={`${sharedClass} transition-colors hover:bg-white/[0.08]`}>
      {inner}
    </a>
  ) : (
    <div className={sharedClass}>{inner}</div>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [formCopied, setFormCopied] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: typeof formErrors = {};
    if (!formState.name.trim()) errors.name = "Name is required.";
    if (!formState.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) errors.email = "Enter a valid email address.";
    if (!formState.message.trim()) errors.message = "Message is required.";
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});

    const subject = formState.subject.trim() || `Portfolio enquiry from ${formState.name.trim()}`;
    const body = [
      "Hi Vishwanatha,",
      "",
      formState.message.trim(),
      "",
      `From: ${formState.name.trim()}`,
      `Email: ${formState.email.trim()}`,
    ].join("\n");

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    let mailtoOpened = false;
    const handleBlur = () => { mailtoOpened = true; };
    window.addEventListener("blur", handleBlur, { once: true });
    window.location.href = mailtoUrl;

    setTimeout(() => {
      window.removeEventListener("blur", handleBlur);
      if (!mailtoOpened && navigator.clipboard) {
        const clipboardText = `To: ${personal.email}\nSubject: ${subject}\n\n${body}`;
        void navigator.clipboard.writeText(clipboardText).then(() => {
          setFormCopied(true);
          setTimeout(() => setFormCopied(false), 7000);
        });
      }
    }, 400);

    setFormSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSent(false), 7000);
  }

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <SectionHeading
          label="Contact"
          title="Let's build something"
          accent="dependable together"
          description="Open to data engineering, backend, and analytics roles. Reach out directly or use the form below — responses are typically within 24 hours."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <Card className="p-8">
              <p className="text-base leading-8 text-slate-400">{contactPitch}</p>
              <div className="mt-6 space-y-4">
                {contactDetails.map((detail) => (
                  <ContactDetailItem
                    key={detail.label}
                    label={detail.label}
                    value={detail.value}
                    href={detail.href}
                    icon={detailIconMap[detail.label as keyof typeof detailIconMap]}
                  />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={personal.resumeUrl} download>
                    <Download />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
                    <BriefcaseBusiness />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-rose-500">{contactAvailability.title}</p>
              <p className="mt-4 font-display text-2xl font-semibold text-slate-100">{contactAvailability.highlight}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{contactAvailability.description}</p>
              <div className="mt-5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-100">
                {contactAvailability.signal}
              </div>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-8">
            {formSent ? (
              <div className="flex flex-col items-center gap-5 py-12 text-center">
                <div className="rounded-full border border-rose-500/20 bg-rose-500/10 p-4 text-rose-400">
                  <CheckCircle2 className="size-8" />
                </div>
                <div className="space-y-2">
                  <p className="font-display text-xl font-semibold text-white">
                    {formCopied ? "Message copied to clipboard" : "Email draft opened"}
                  </p>
                  <p className="text-sm text-slate-400">
                    {formCopied
                      ? `No mail client detected. The message has been copied — paste it into an email to ${personal.email}.`
                      : "Your default mail client should have opened with the message pre-filled. Send it when you're ready."}
                  </p>
                </div>
                <Button variant="secondary" onClick={() => { setFormSent(false); setFormCopied(false); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" noValidate aria-label="Contact form" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      Your Name <span className="text-rose-500" aria-label="required">*</span>
                    </label>
                    <Input
                      id="name"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      value={formState.name}
                      onChange={(e) => { setFormState((c) => ({ ...c, name: e.target.value })); setFormErrors((c) => ({ ...c, name: undefined })); }}
                      placeholder="Enter your name"
                    />
                    {formErrors.name && <p className="text-xs text-rose-400">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      Email Address <span className="text-rose-500" aria-label="required">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      value={formState.email}
                      onChange={(e) => { setFormState((c) => ({ ...c, email: e.target.value })); setFormErrors((c) => ({ ...c, email: undefined })); }}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && <p className="text-xs text-rose-400">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    autoComplete="off"
                    value={formState.subject}
                    onChange={(e) => setFormState((c) => ({ ...c, subject: e.target.value }))}
                    placeholder="Role, project, or collaboration"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Message <span className="text-rose-500" aria-label="required">*</span>
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!formErrors.message}
                    value={formState.message}
                    onChange={(e) => { setFormState((c) => ({ ...c, message: e.target.value })); setFormErrors((c) => ({ ...c, message: undefined })); }}
                    placeholder="Tell me a bit about the role, team, or project."
                  />
                  {formErrors.message && <p className="text-xs text-rose-400">{formErrors.message}</p>}
                </div>
                <div className="flex flex-wrap gap-3">
                  <MagneticButton>
                    <Button type="submit" size="lg">
                      Open Email Draft
                      <ArrowRight />
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button asChild size="lg" variant="secondary">
                      <a href={`mailto:${personal.email}`}>
                        <Mail />
                        Email Directly
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
