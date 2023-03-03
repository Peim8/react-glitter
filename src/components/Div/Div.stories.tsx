import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Div from "./Div";

export default {
    title: "Components/Div",
    component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const Primary = Template.bind({});
