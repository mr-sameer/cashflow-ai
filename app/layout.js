import "./globals.css";

export const metadata = {
  title: "Cashflow AI – Get Paid Faster",
  description: "AI-powered cashflow & payment follow-ups for small businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}