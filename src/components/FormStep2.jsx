import React from "react";
import { connect } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { addFormData, setFormStep } from "../slices/FormSlice";

export const FormStep2 = (props) => {
  //grab dispatch actions from props
  const { addFormData, setFormStep, currentStep, error } = props;

  const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const SecondStepSchema = yup.object().shape({
    email: yup.string().email(),
    number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  return (
    <>
      <Typography align="center" variant="h2">
        Form Step 1
      </Typography>
      <Formik
        initialValues={{
          email: "",
          number: "",
        }}
        validationSchema={SecondStepSchema}
        onSubmit={(values) => {
          addFormData(values);
          const newStep = currentStep + 1;
          setFormStep(newStep);
        }}
      >
        {/* Render function */}
        {({ errors, touched, handleSubmit, handleChange, values }) => (
          <Form>
            <label htmlFor="email">Email Address</label>
            <TextField
              fullWidth
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange("email")}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <label htmlFor="number">Phone Number</label>
            <TextField
              fullWidth
              id="number"
              name="number"
              value={values.number}
              onChange={handleChange("number")}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentStep: state.form.step,
    error: state.form.error,
  };
};

const mapDispatchToProps = { addFormData, setFormStep };

export default connect(mapStateToProps, mapDispatchToProps)(FormStep2);
