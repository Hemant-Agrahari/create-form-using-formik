"use client";
import InputField from "@/component/input-field/InputField";
import { Formik, Form } from "formik";
import React from "react";
import {
  BANK_DETAIL_FIELDS,
  BANK_DETAIL_HEADER,
  BANK_DETAILS_TAB_INITAL_VALUES,
  bankDetailsValidation,
} from "./constant/constant";
import "./style.scss";
const Home = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="d-flex align-items-center justify-content-center container">
      <div className="bank-form">
        <Formik
          initialValues={BANK_DETAILS_TAB_INITAL_VALUES}
          enableReinitialize
          validationSchema={bankDetailsValidation}
        >
          {({ errors, touched }) => (
            <Form onSubmit={onSubmit}>
              <h3 className="text-center">Bank Form Detils</h3>
              <div className="field-container d-flex align-items-center justify-content-center">
                <div className="input-field-label">
                  {BANK_DETAIL_HEADER.BANK_ACCOUNT_NUMBER}
                </div>
                <div className="input-field">
                  <InputField
                    error={errors.bankAccountNumber}
                    touched={touched.bankAccountNumber}
                    name={BANK_DETAIL_FIELDS.BANK_ACCOUNT_NUMBER}
                  />
                </div>
              </div>

              <div className="field-container d-flex align-items-center justify-content-center">
                <div className="input-field-label">
                  {BANK_DETAIL_HEADER.BANK_ACCOUNT_NAME}
                </div>
                <div className="input-field">
                  <InputField
                    error={errors.bankAccountName}
                    touched={touched.bankAccountName}
                    name={BANK_DETAIL_FIELDS.BANK_ACCOUNT_NUMBER}
                  />
                </div>
              </div>

              <div className="field-container d-flex align-items-center justify-content-center">
                <div className="input-field-label">
                  {BANK_DETAIL_HEADER.BANK_IBAN_OR_BIC}
                </div>
                <div className="input-field">
                  <InputField
                    error={errors.bankIBANOrBIC}
                    touched={touched.bankIBANOrBIC}
                    name={BANK_DETAIL_FIELDS.BANK_IBAN_OR_BIC}
                  />
                </div>
              </div>

              <div className="field-container d-flex align-items-center justify-content-center">
                <div className="input-field-label">
                  {BANK_DETAIL_HEADER.BANK_SWIFT}
                </div>
                <div className="input-field">
                  <InputField
                    error={errors.bankSwift}
                    touched={touched.bankSwift}
                    name={BANK_DETAIL_FIELDS.BANK_SWIFT}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center submit-button">
                <button type="submit" className="form-submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;
