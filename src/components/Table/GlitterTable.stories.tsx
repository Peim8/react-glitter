import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GlitterTable from "./GlitterTable";

export default {
  title: "Components/Table",
  component: GlitterTable,
} as ComponentMeta<typeof GlitterTable>;

const Template: ComponentStory<typeof GlitterTable> = (args) => (
  <GlitterTable {...args}>
    <th>Test</th>
    <tr>
      <td>Test2!!!!!!!!!!!!!!!!</td>
    </tr>
    <tr>
      <td>Test2!!!!!!!!!!!!!!!!</td>
    </tr>
  </GlitterTable>
);

export const Primary = Template.bind({});
