import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/components/buttons/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>create lobby</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};
