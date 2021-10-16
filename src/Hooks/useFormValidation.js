import React from "react";

function useFormValidation(initialState, validate, next) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        next(values);
        // setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

//   React.useEffect(() => {
//     console.log(values);
//   }, [values]);

  function handleChange(event) {
    const newVals = {
      ...values,
      [event.target.name]: event.target.value
    };

    setValues(newVals);

    const validationErrors = validate(newVals);
    setErrors(validationErrors);
  }

  function handleSwitch(val) {
    setValues({
      ...values,
      'anon': val
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    handleSwitch,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;