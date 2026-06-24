import { Instagram, Twitter, Facebook, PartyPopper } from "lucide-react";

const navLinks = [
  { label: "Flavors", href: "#flavors" },
  { label: "Specials", href: "#specials" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

function IceCreamLogoWhite() {
  return (
    <svg viewBox="0 0 36 48" className="w-9 h-9" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="footerScoop1" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fbb6ce" />
          <stop offset="100%" stopColor="#f472b6" />
        </radialGradient>
        <radialGradient id="footerScoop2" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#34d399" />
        </radialGradient>
        <radialGradient id="footerCone" cx="50%" cy="10%" r="80%">
          <stop offset="0%" stopColor="#fcd9a0" />
          <stop offset="100%" stopColor="#c27c1a" />
        </radialGradient>
      </defs>
      <polygon points="18,47 8,24 28,24" fill="url(#footerCone)" />
      <line x1="18" y1="28" x2="18" y2="45" stroke="#b8690a" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="18" cy="24" rx="10" ry="8" fill="url(#footerScoop2)" />
      <ellipse cx="18" cy="16" rx="9" ry="7.5" fill="url(#footerScoop1)" />
      <circle cx="16" cy="7" r="2.5" fill="#ef4444" />
      <path d="M18 13.5 Q20 10 17 8" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-16">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsl(340 30% 12%) 0%, hsl(270 25% 10%) 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IceCreamLogoWhite />
              <span className="font-serif text-xl font-bold text-white">Scoops & Dreams</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Handcrafted small-batch ice cream made with love and the finest local ingredients since 2012.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                >
                  <s.Icon size={18} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">Hours</p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex justify-between"><span>Monday – Thursday</span><span>11am – 9pm</span></div>
              <div className="flex justify-between"><span>Friday – Saturday</span><span>11am – 11pm</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>12pm – 9pm</span></div>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm font-semibold mb-1 flex items-center gap-2">
                <PartyPopper size={15} className="text-pink-400" />
                Book a Private Event
              </p>
              <p className="text-white/40 text-xs">hello@scoopsanddreams.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Scoops & Dreams. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
