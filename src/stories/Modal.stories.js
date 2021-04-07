import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../components/molecules/Modal';

const stories = storiesOf('Modal', module);

stories.add('modal', () => <Modal/>);