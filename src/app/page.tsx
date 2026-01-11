"use client";

import { Container, Title, Paper, TextInput, NumberInput, Checkbox, Stack, Text } from "@mantine/core";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-8">
			<Container size="sm" className="w-full">
				<Title
					order={1}
					className="text-center mb-8 title-outline"
					style={{
						fontSize: "5rem",
						fontWeight: 800,
						color: "white",
						textTransform: "uppercase",
						letterSpacing: "0.05em",
					}}
				>
					The Story Game
				</Title>

				<Paper
					shadow="xl"
					p="xl"
					radius="md"
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						border: "1px solid rgba(255, 255, 255, 0.1)",
					}}
				>
					<Text
						size="lg"
						fw={600}
						mb="lg"
						style={{ color: "white", borderBottom: "2px solid #cc1c2b", paddingBottom: "0.5rem" }}
					>
						Game Settings
					</Text>

					<Stack gap="md">
						<TextInput
							label="Category"
							placeholder="Random"
							styles={{
								label: { color: "white", marginBottom: 4 },
							}}
						/>

						<NumberInput
							label="Minimum Story Count"
							min={1}
							defaultValue={1}
							styles={{
								label: { color: "white", marginBottom: 4 },
							}}
						/>

						<NumberInput
							label="Maximum Story Count"
							max={10}
							defaultValue={5}
							styles={{
								label: { color: "white", marginBottom: 4 },
							}}
						/>

						<Checkbox
							label="Double Points"
							styles={{
								label: { color: "white" },
							}}
						/>

						<NumberInput
							label="Number of Rounds"
							min={3}
							max={12}
							defaultValue={5}
							styles={{
								label: { color: "white", marginBottom: 4 },
							}}
						/>
					</Stack>
				</Paper>
			</Container>
		</div>
	);
}
