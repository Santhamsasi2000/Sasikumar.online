import { ErrorMessage, Field } from "formik";


const FormField = ({ label, name, type = "text", as = "input", ...props }) => (
  <div className="flex flex-col mb-4">
    <label className="font-medium" htmlFor={name}>
      {label}
    </label>
    <Field
      id={name}
      name={name}
      type={type}
      className={`p-2 mt-2 rounded border-1 border-gray-300 focus:shadow-2xl
        outline-0 focus:ring-2 focus:ring-blue-800 focus:border-0 focus-within:shadow-blue-600/50
        ${type === "textarea" ? "pt-3" : ""}`} 
      as={as}
      {...props}
    />
    <ErrorMessage name={name} component="div" className="text-red-600 mt-2" />
  </div>
);

export default FormField;
