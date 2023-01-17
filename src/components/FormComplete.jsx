import React from "react";
import { connect } from "react-redux";

export const FormComplete = (props) => {
  const { formData } = props;

  const formDataArray = Object.entries(formData);

  return (
    <div>
      <h3>FormComplete</h3>
      {formDataArray.map((arr) => {
        return <p>{`${arr[0]}` + ": " + `${arr[1]} `}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formData: state.form.fields,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormComplete);
