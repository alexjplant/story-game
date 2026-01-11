import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme";
import "./globals.css";

export const metadata: Metadata = {
	title: "The Story Game",
	description: "An interactive storytelling game",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className="antialiased">
				<MantineProvider theme={theme} defaultColorScheme="dark">
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
