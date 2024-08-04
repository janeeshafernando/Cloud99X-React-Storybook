import { ComponentProps } from "react";
import { Button } from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
        options:['primary','secondary'],
       control: {
        type:"select",
       }
    },
    size: {
        options:['sm','md','lg'],
       control: {
        type:"select",
       }
    }
  },
  args: {
    onClick: fn(),
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Login now",
    variant: "secondary",
    size: "lg",
    children: 'Button',
  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
