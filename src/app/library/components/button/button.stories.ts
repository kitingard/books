import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { ButtonTypes } from '../../constants/button-types.enum';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: ButtonTypes.PRIMARY,
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonTypes.SECONDARY,
    text: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    type: ButtonTypes.GHOST,
    text: 'Ghost Button',
  },
};
