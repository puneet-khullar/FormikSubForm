import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NameSubForm } from "./NameSubForm";

const initialValues = {
  name: {
    first: "Rajesh",
    last: "Naroth"
  }
};

const nameSchema = Yup.object().shape({
  name: Yup.string().required("Required")
});

const handleSubmit = values => {
  console.log(values);
};

const NameForm = ({ handleSubmit, ...props }) => {
  return (
    <Form>
      <Field name="name" component={NameSubForm} />
      <input type="submit" value="Submit" onSubmit={handleSubmit} />
    </Form>
  );
};

export const ReactFormikForm = () => (
  <div>
    <h3>Sub Forms</h3>
    <Formik
      initialValues={initialValues}
      validationSchema={nameSchema}
      onSubmit={handleSubmit}
      children={NameForm}
    />
  </div>
);
