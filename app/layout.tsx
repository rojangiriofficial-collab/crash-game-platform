import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crash Game Platform",
  description: "Crash Game Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
