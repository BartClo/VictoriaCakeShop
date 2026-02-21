import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Postres Victoria Cake Shop | Pastelería Artesanal en Rancagua",
  description:
    "Pastelería artesanal en Rancagua con línea tradicional y saludable. Tortas, waffles, milkshakes, opciones keto y sin azúcar. Pide por WhatsApp.",
  keywords: [
    "pastelería Rancagua",
    "tortas artesanales",
    "postres saludables",
    "keto Rancagua",
    "Victoria Cake Shop",
    "pastelería sin azúcar",
    "waffles Rancagua",
    "sándwiches ciabatta",
  ],
  openGraph: {
    title: "Postres Victoria Cake Shop | Pastelería Artesanal en Rancagua",
    description:
      "El dulce equilibrio: pastelería tradicional y saludable en Astorga 618, Rancagua.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
