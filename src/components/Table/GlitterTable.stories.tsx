import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GlitterTable from "./GlitterTable";

export default {
    title: "Components/Table",
    component: GlitterTable,
} as ComponentMeta<typeof GlitterTable>;

const Template: ComponentStory<typeof GlitterTable> = (args) => <GlitterTable {...args} />;

export const Primary = Template.bind({});
