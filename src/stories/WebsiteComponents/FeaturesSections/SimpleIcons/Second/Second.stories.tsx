import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Second";

const meta = {
  title: "Website Components/Features Sections/Simple Icons",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Second: Story = {};
