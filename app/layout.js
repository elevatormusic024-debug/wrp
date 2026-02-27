import "./globals.css";

export const metadata = {
  title: "Siddhi Engineers | Work Profile",
  description:
    "A modern showcase of Siddhi Engineers' completed residential and commercial projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
