import React from "react";
import { connect } from "react-redux";
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
import { Typography } from "@mui/material";

export const Form = (props) => {
  const formStep = (state) => state.form.step;
  let stepContent;
  switch (formStep) {
    case 0:
      stepContent = <FormStep1 />;
      break;
    case 1:
      stepContent = <FormStep2 />;
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
      <stepContent />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
