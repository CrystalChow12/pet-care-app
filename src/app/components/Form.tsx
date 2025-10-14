import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import {
  firstname_validation,
  lastname_validation,
  email_validation,
  phone_validation,
  desc_validation,
} from "../../utils/inputValidation";

export const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <p className="error text-red-800 flex justify-center">
        Some error message
      </p>

      {/* by wrapping the form with FormProvider, any child component can call useFormContext() to access the form's method and state  */}

      <FormProvider {...methods}>
        <form
          className="max-w-sm mx-auto p-3"
          noValidate
          method="POST"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input {...firstname_validation} />

          <Input {...lastname_validation} />

          <Input {...email_validation} />

          <Input {...phone_validation} />

          <Input {...desc_validation} />

          <button
            type="submit"
            onClick={onSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
