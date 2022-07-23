import React from "react";
import Loader from "./loader";

export default {
  title: "Loader",
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "xs",
};

export const Small = Template.bind({});
Small.args = {
  size: "s",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "m",
};

export const Large = Template.bind({});
Large.args = {
  size: "l",
};
