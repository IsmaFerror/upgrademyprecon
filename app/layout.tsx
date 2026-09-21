import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UpgradeMyPrecon | Mejora tu mazo',
  description: 'Descubre qué cartas añadir y quitar para mejorar tus mazos preconstruidos de Magic: The Gathering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}