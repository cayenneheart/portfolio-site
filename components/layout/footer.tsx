import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/cayenneheart',
    label: 'GitHub',
    external: true,
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/cayenneheart1',
    label: 'Twitter',
    external: true,
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/kaien-komine-07a31a338/',
    label: 'LinkedIn',
    external: true,
  },
  {
    icon: Mail,
    href: 'mailto:cayenneheart@gmail.com',
    label: 'Email',
    external: false,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
