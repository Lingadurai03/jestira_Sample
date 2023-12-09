import type { Metadata } from 'next';
import './globals.css';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: 'Jestra',
  description: 'Welcome',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </html>
  );
}
