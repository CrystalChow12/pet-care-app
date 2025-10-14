"use client";
import { Input } from "../../components/Input";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import {
  firstname_validation,
  lastname_validation,
  email_validation,
  phone_validation,
} from "../../../utils/inputValidation";

const AddOwnerPage = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <div>
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

          <button
            type="submit"
            onClick={onSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>

          <div className="mt-5">
            {success && (
              <p className="text-green-500">
                Form has been submitted successfully
              </p>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddOwnerPage;
