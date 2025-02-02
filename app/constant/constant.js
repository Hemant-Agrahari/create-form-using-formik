import * as Yup from "yup";

export const BANK_DETAIL_FIELDS = {
  BANK_ACCOUNT_NUMBER: "bankAccountNumber",
  BANK_ACCOUNT_NAME: "bankAccountName",
  BANK_IBAN_OR_BIC: "bankIBANOrBIC",
  BANK_SWIFT: "bankSwift",
};

export const BANK_DETAIL_HEADER = {
  BANK_ACCOUNT_NUMBER: "Bank Number",
  BANK_ACCOUNT_NAME: "Bank Name",
  BANK_IBAN_OR_BIC: "bankIBANOrBIC",
  BANK_SWIFT: "bankSwift",
};

export const BANK_DETAILS_TAB_INITAL_VALUES = {
  [BANK_DETAIL_FIELDS.BANK_ACCOUNT_NAME]: "",
  [BANK_DETAIL_FIELDS.BANK_ACCOUNT_NUMBER]: "",
  [BANK_DETAIL_FIELDS.BANK_IBAN_OR_BIC]: "",
  [BANK_DETAIL_FIELDS.BANK_SWIFT]: "",
  [BANK_DETAIL_FIELDS.NOTES]: "",
};

// Bank details validation schema with mandatory fields
export const bankDetailsValidation = Yup.object().shape({
  [BANK_DETAIL_FIELDS.BANK_ACCOUNT_NUMBER]: Yup.string()
    .matches(/^[0-9]*$/, "Must be a number")
    .max(15, "Maximum 15 characters")
    .required("This field is required"),

  [BANK_DETAIL_FIELDS.BANK_ACCOUNT_NAME]: Yup.string()
    .min(3, "Bank account name must be at least 3 characters")
    .required("This field is required"),

  [BANK_DETAIL_FIELDS.BANK_IBAN_OR_BIC]: Yup.string()
    .max(22, "Maximum 22 characters")
    .required("This field is required"),

  [BANK_DETAIL_FIELDS.BANK_SWIFT]: Yup.string()
    .max(11, "Maximum 11 characters")
    .required("This field is required"),
});
