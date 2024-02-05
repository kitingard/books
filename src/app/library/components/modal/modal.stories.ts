import type { Meta, StoryObj } from '@storybook/angular';

import { ModalComponent } from './modal.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ModalComponent> = {
  title: 'Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  render: (args: ModalComponent) => ({
    props: {
      ...args,
    },
    template: `<lib-modal><p>This is a template test.</p></lib-modal>`,
  }),
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Modal: Story = {};
