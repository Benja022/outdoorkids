/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OutdoorKids",
  description: "Find your next park adventure"
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
