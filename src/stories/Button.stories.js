import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, OutlineButton } from '../components/atoms/Button';

const stories = storiesOf('Button', module);

stories.add('button', () => <Button/>);
stories.add('outlinebutton', () => <OutlineButton/>);


// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
