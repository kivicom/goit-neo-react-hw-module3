import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string().min(3).max(50).required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ id: nanoid(), name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={style.error} />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={style.error} />
        </label>
        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
