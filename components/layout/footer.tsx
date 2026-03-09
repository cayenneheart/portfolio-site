import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/cayenneheart', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/cayenneheart1', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kaien-komine-07a31a338/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:cayenneheart@gmail.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
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
