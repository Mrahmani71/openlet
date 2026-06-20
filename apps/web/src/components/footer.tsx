import { APP_CONFIG } from "@openlet/shared/config";
import {
  XLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  InstagramLogoIcon,
  AppleLogoIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-8xl px-6">
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 md:py-20 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 mb-4 md:col-span-4 lg:col-span-1 lg:mb-0">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-sm bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">O</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-[0.15em]">
                {APP_CONFIG.name.toUpperCase()}
              </span>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world's leading digital publication for technology, business, and culture.
              Rigorous journalism for a complex world.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "X", icon: XLogoIcon },
                { label: "LinkedIn", icon: LinkedinLogoIcon },
                { label: "YouTube", icon: YoutubeLogoIcon },
                { label: "Instagram", icon: InstagramLogoIcon },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <FooterColumn
            title="Categories"
            links={["Technology", "Business", "Politics", "Science", "Culture", "Sports"].map(
              (l) => ({ label: l, href: `/c/${l.toLowerCase()}` }),
            )}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Press Kit", href: "/press" },
              { label: "Advertise", href: "/advertise" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Accessibility", href: "/accessibility" },
            ]}
          />

          {/* App Store */}
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
              Get the App
            </div>
            <div className="space-y-3">
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border bg-muted px-4 py-2.5 transition-colors hover:border-primary/30"
              >
                <AppleLogoIcon className="text-xl text-muted-foreground transition-colors group-hover:text-primary" />
                <div>
                  <div className="text-[10px] leading-none text-muted-foreground">
                    Download on the
                  </div>
                  <div className="text-sm leading-tight font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border bg-muted px-4 py-2.5 transition-colors hover:border-primary/30"
              >
                <GooglePlayLogoIcon className="text-lg text-muted-foreground transition-colors group-hover:text-primary" />
                <div>
                  <div className="text-[10px] leading-none text-muted-foreground">Get it on</div>
                  <div className="text-sm leading-tight font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} {APP_CONFIG.name} Media Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision. Read with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-5 text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
