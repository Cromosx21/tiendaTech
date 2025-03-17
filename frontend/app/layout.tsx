import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Tienda Tech",
	description: "Tienda Tech, venta de equipos de computo y accesorios",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
