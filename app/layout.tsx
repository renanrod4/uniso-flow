import type { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "Uniso Flow",
  description: "Gestão estratégica de fluxo acadêmico e equilíbrio de turmas para a Uniso",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
