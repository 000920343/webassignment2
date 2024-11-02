
import "./globals.css";

// app/layout.js

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: 'New Generation High School - Student Portal',
  description: 'A portal for managing student information at New Generation High School.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
