import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import GenreCard from '@/components/GenreCard/GenreCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Genre Card',
  component: GenreCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GenreCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GenreCard> = (args) => (
  <GenreCard {...args} />
);

export const GenreCardStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GenreCardStory.args = {
  name: 'Latin',
  artists: [
    'Daddy Yankee',
    'J Balvin',
    'Enrique Iglesias',
    'Luis Fonsi',
    'Shakira',
  ],
};
