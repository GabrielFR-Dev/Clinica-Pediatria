import "./globals.css";



export const metadata = {
  title: "Clinica Pediatria",
  description: "Projeto FullStack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
