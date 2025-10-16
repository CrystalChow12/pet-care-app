"use client";
import { addOwner } from "../../../lib/actions/data";
import { Input } from "../../components/Input";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import {
  firstname_validation,
  lastname_validation,
  email_validation,
  phone_validation,
} from "../../../utils/inputValidation";

import type { Owner, OwnerInput, Message } from "../../../types";

const AddOwnerPage = () => {
  const methods = useForm<OwnerInput>(); //of type OwnerInput

  const [message, setMessage] = useState<Message | null>(null); //message can be type thats either the string 'success' or the string 'error' OR it can be null (theres no message to be shown). We are setting message initally.

  const onSubmit = methods.handleSubmit(async (data: OwnerInput) => {
    console.log(data);
    setMessage(null); //clear previous success messages

    try {
      const result = await addOwner(data);

      //check for the success or failure
      result.success
        ? setMessage({ type: "success", text: result.message })
        : setMessage({ type: "error", text: result.message });

      methods.reset();
    } catch (error) {
      console.log("Error inserting into the db: ", error);

      setMessage({
        type: "error",
        text: "There was an error while completing this action.",
      });
    }
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
          {/* instead of firstname_validation.name or firstname_validation.label and so on. the spread property `...props` provides a concise way to pass multiple properties from an object as individual props to a React component.*/}
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

          {/* Display our status message only if it exists. That is what message && means  */}
          {message && (
            <div className="mt-5">
              <p
                className={
                  message.type === "success" ? "text-green-600" : "text-red-700"
                }
              >
                {message.text}
              </p>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default AddOwnerPage;
