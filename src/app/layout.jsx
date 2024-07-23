import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Código Certo | Construindo o amanhã, hoje",
  description: "Comunidade de Desenvolvedores Voluntários",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
