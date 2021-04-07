import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoginForm } from '../components/organisms/LoginForm';


const stories = storiesOf( 'LoginForm', module);

stories.add('loginForm', () =>  <LoginForm/>);