import "./globals.css";

export const metadata = {
  title: "Vinh Bui | Portfolio",
  description: "Welcome to my personal portfolio showcasing my work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
