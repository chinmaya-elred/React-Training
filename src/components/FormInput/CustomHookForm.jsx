import React from "react";

const useForm = (initialState, validate) => {
  const [formData, setFormData] = React.useState(initialState);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    const errors = validate(formData);
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmitting(true);
  };

  return {
    formData,
    formErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  };
};

export default useForm;
