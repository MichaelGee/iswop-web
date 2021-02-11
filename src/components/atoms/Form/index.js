import styled from '@emotion/styled';
import { InputGroup } from "./Input";
import {Radio} from './Radio';
import {SearchBar} from './SearchBar'


const Form = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
`;

Form.InputGroup = InputGroup;
Form.Radio = Radio;
Form.Searchbar = SearchBar;
export {Form}