import { profile, socialLinks } from "../../data/profile";
import { SocialLinks } from "../layout/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card mx-auto max-w-2xl p-10 text-center">
          <p className="section-label mb-3">Connect</p>
          <h2 className="section-title mb-4">Let&apos;s talk systems & AI</h2>
          <p className="mb-8 text-body">
            Open to architecture reviews, leadership conversations, and
            collaborations on applied AI and large-scale platform design.
          </p>

          <SocialLinks
            links={socialLinks}
            className="justify-center"
          />

          <a
            href={`mailto:${profile.email}`}
            className="btn-primary mt-6 inline-block px-6 py-3"
          >
            {profile.email}
          </a>

          <p className="mt-8 text-xs text-subtle">
            Based in {profile.location} · Building at {profile.workLocation}
          </p>
        </div>
      </div>
    </section>
  );
}
