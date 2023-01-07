import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head />
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
