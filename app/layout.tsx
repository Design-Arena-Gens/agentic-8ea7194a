import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediSupply Pro - Suministros Médicos y Quirúrgicos de Excelencia",
  description: "Líder en distribución de material médico y quirúrgico de alta calidad. Soluciones integrales para hospitales, clínicas y profesionales de la salud.",
  keywords: "material médico, suministros quirúrgicos, equipamiento hospitalario, instrumental médico, distribución médica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
