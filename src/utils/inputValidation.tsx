/*  This file contains all the validators objects */
import { InputProps } from "../types";

export const createNameValidation = (fieldName: "firstname" | "lastname") => ({
  name: fieldName,
  // Capitalize first letter + add colon
  label: fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ":",
  type: "text" as const,
  id: fieldName,
  validation: {
    required: {
      value: true,
      message: "This field is required",
    },
    maxLength: {
      value: 30,
      message: "Limit exceeded. 30 characters max",
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: "Invalid name.",
    },
  },
});

// factory pattern
export const firstname_validation = createNameValidation("firstname");
export const lastname_validation = createNameValidation("lastname");

export const email_validation = {
  label: "Email:",
  name: "email",
  type: "email",
  id: "email",
  validation: {
    required: {
      value: false,
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Email is not valid",
    },
  },
} as InputProps; //tell ts to take the literal values. TS is being annoying

export const phone_validation = {
  label: "Phone: ",
  type: "tel",
  id: "phone",
  name: "phone",
  placeholder: "+1 246 123 4567",
  validation: {
    required: {
      value: true,
      message: "Phone number is required",
    },
    pattern: {
      value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      message: "Please enter a valid phone number (e.g., +1 246 123 4567)",
    },
  },
} as InputProps; //trying this thing to see if it stops complaining even tho this has a red squiggly

export const desc_validation = {
  name: "description",
  label: "Description: ",
  multiline: true,
  id: "description",
  placeholder: "write description ...",
  validation: {
    required: {
      value: true,
      message: "Please write a description.",
    },
    maxLength: {
      value: 200,
      message: "Limit exceeded. 200 characters max",
    },
  },
} as InputProps;
