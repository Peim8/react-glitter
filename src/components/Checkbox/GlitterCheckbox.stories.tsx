import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GlitterCheckbox from "./GlitterCheckbox";

export default {
    title: "Components/GlitterCheckbox",
    component: GlitterCheckbox,
} as ComponentMeta<typeof GlitterCheckbox>;

const Template: ComponentStory<typeof GlitterCheckbox> = (args) => <GlitterCheckbox {...args} />;

export const Primary = Template.bind({});
