"use client";
import React from "react";
import { Field } from "formik";
import "./style.scss";

/**
 * Reusable InputField component with Formik for form handling and validation.
 *
 * @param {Object} props - The props for the input field.
 * @param {string} props.name - The name attribute for the input field, should match the Formik field name.
 * @param {string} [props.type="text"] - The type of the input field (e.g., "text", "password", etc.).
 * @param {string} [props.placeholder=""] - The placeholder text for the input field.
 * @param {boolean} [props.required=false] - Whether the input field is required.
 * @param {string} [props.className=""] - Additional class names to apply to the input container.
 * @param {string} [props.error=""] - The error message to display for validation.
 * @param {boolean} [props.touched=false] - Whether the field has been touched by the user.
 * @param {boolean} [props.disabled=false] - Whether the input field is disabled.
 * @param {Object} rest - Any other props to be spread onto the input element (e.g., autoFocus, maxLength).
 *
 * @returns {JSX.Element} The rendered input field component.
 */
const InputField = ({
  name,
  type = "text",
  placeholder = "",
  required = false,
  className = "",
  error = "",
  touched = false,
  disabled = false,
  values,
}) => {
  return (
    <div className="position-relative">
      <div className={`input-container ${className}`}>
        {/* Formik's Field component */}
        <Field
          data="input-field"
          name={name}
          value={values}
          type={type}
          placeholder={placeholder}
          required={required}
          className="input-field"
          disabled={disabled}
        />

        {/* Show error message only if the field has been touched and there's an error */}
        {error && touched ? (
          <div
            className={`error-message-text-color text-sm position-absolute`}
            title={error}
          >
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
