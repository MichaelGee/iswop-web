import React from 'react'
import {storiesOf} from '@storybook/react'
import { Form } from '../components/atoms/Form'



const stories = storiesOf('Input', module);
stories.add('input', ()=>(<Form.InputGroup></Form.InputGroup>));
stories.add('radio', ()=>(<Form.Radio></Form.Radio>))
stories.add('seachbar', ()=>(<Form.Searchbar></Form.Searchbar>))
