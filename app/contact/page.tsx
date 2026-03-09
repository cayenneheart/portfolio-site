import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: '小峯海円へのお仕事のご依頼やご質問など、お気軽にお問い合わせください。',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Contact</h1>
        <p className="mt-2 text-muted-foreground">
          お仕事のご依頼やご質問など、お気軽にお問い合わせください
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
