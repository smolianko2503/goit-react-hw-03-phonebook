import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  :hover {
    background-color: green;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
