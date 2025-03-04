import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 