"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";

// Incredibles/Netflix style - crimson red with black and white accents
const crimson: MantineColorsTuple = [
	"#ffe5e9",
	"#ffc9cf",
	"#ff9aa5",
	"#ff6a7a",
	"#ff4154",
	"#e82836",
	"#cc1c2b",
	"#b01423",
	"#940d1a",
	"#780612",
];

export const theme = createTheme({
	primaryColor: "crimson",
	colors: {
		crimson,
	},
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
	headings: {
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
		fontWeight: "700",
	},
	components: {
		TextInput: {
			styles: {
				input: {
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					borderColor: "rgba(255, 255, 255, 0.2)",
					color: "white",
				},
			},
		},
		NumberInput: {
			styles: {
				input: {
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					borderColor: "rgba(255, 255, 255, 0.2)",
					color: "white",
				},
			},
		},
		Checkbox: {
			styles: {
				input: {
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					borderColor: "rgba(255, 255, 255, 0.2)",
				},
			},
		},
	},
});
