import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FormLabel, Form, ErrorMessage, Button } from './Phonebook.styled';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .required('Input name...'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Input number...'),
});

export const Phonebook = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onAddContact({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormLabel>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
