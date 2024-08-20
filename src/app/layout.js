/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Inicio from "./ui/Inicio";
// import NavegadorHamburguesa from "./ui/NavegadorHamburguesa";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OutdoorKids",
  description: "Find your next park adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Header />

      <Inicio />
      <Footer />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
