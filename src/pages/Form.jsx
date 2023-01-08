import React from "react";
import { connect } from "react-redux";
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
import { Typography } from "@mui/material";

export const Form = (props) => {
  //grab all of the state from props
  const { formStep } = props;

  //   console.log(formStep);

  //declare function to return correct component
  let StepContent = () => {};

  switch (formStep) {
    case 0:
      StepContent = () => {
        return <FormStep1 />;
      };
      break;
    case 1:
      StepContent = () => {
        return <FormStep2 />;
      };
      break;
    default:
      break;
  }

  return (
    <>
      <Typography align="center" variant="h1">
        The Form Steps/Components below should change when a user hits back or
        submit.
      </Typography>
      <StepContent />
    </>
  );
};

//set all of the state to props
const mapStateToProps = (state) => ({
  formStep: state.form.step,
});

//set dispatch actions to props
const mapDispatchToProps = {};

//connects a React component to a Redux store
//https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(Form);
