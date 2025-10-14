/* using react-hook-form, which will ensure that the data entered by users is valid before it is submitted. https://www.freecodecamp.org/news/how-to-validate-forms-in-react/ */

import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "./../../utils";
import type { InputProps } from "../../types";

//pass in the label, type, id & placeholder as props
export const Input = ({
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  name,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); //using the useFormContext hook to retrieve the formState, which contains all the form error messages.

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="mb-5">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>

        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </div>

      {multiline ? (
        <textarea
          id={id}
          className="min-h-[10rem] max-h-[20rem] resize-y"
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

// /* a custom component called InputError which receives a message as a prop and displays it */
const InputError = ({ message }: { message: string }) => {
  return <p className="text-red-600 text-sm">{message}</p>;
};
