import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import ProfileCard from '@/components/ProfileCard/ProfileCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards',
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = (args) => {
  const [name, setName] = useState(args.name);
  const [avatar, setAvatar] = useState(args.avatar);

  const handleSetAvatar = () => {
    const randomNum = Math.floor(Math.random() * 90000) + 10000;

    setAvatar(`https://avatars.dicebear.com/api/bottts/${randomNum}.svg`);
  };

  return (
    <ProfileCard
      name={name}
      avatar={avatar}
      setName={setName}
      setAvatar={handleSetAvatar}
    />
  );
};

export const ProfileCardStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileCardStory.args = {
  name: 'gentij',
  avatar: 'https://avatars.dicebear.com/api/bottts/123123123.svg',
};
