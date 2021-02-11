import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from '../components/organisms/Navbar';


const stories = storiesOf('Navbar', module);

stories.add('navbar', () => <Navbar/>);