import React from "react";
import { connect } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addFormData, setFormStep } from "../slices/FormSlice";

export const FormStep1 = (props) => {
  //grab dispatch actions from props
  const { addFormData, setFormStep } = props;

  const FirstStepSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });

  const currentStep = useSelector((state) => state.form.step);

  const error = useSelector((state) => state.form.error);

  console.log(currentStep);
  console.log(error);

  return (
    <>
      <Typography align="center" variant="h2">
        Form Step 1
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={FirstStepSchema}
        onSubmit={(values) => {
          addFormData(values);
          const newStep = currentStep + 1;
          setFormStep(newStep);
          console.log(currentStep);

          //   const data = { ...formData, ...values };
          //   setFormData(data);
          //   setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        {/* this type of return is called .... */}
        {({ errors, touched, handleSubmit, handleChange, values }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange("firstName")}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange("lastName")}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="button"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { addFormData, setFormStep };

export default connect(mapStateToProps, mapDispatchToProps)(FormStep1);
