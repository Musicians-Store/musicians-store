import React from "react";
import Button from "./button";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "Call To Action/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  hasIcon: "left",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  hasIcon: "left",
  label: "Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  hasIcon: "left",
  label: "Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  hasIcon: "left",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled",
  hasIcon: "left",
  label: "Button",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "primary",
  loading: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: "secondary",
  hasIcon: "icon-only",
  icon: <AddIcon />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: "secondary",
  hasIcon: "left",
  label: "Button",
  icon: <AddIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  variant: "secondary",
    hasIcon: "right",
  label: "Button",
  icon: <AddIcon />,
};
