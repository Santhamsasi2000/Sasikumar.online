import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion";
import Swal from 'sweetalert2'
import { Form, Formik,  } from "formik";
import { FiSend } from "react-icons/fi";
import FormField from "./FormField";
import { ValidationSchema } from "./ValidationSchema";


const title = "Send Me a Message";
const subTitle = "Fill out the form below and I'll get back to you within 24 hours.";
const key = "8194d823-65a0-4794-8886-1f0e1cccb8b8";

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const { default: Swal } = await import("sweetalert2");
        Swal.fire({
          title: "MESSAGE SENT !",
          text: "Thank you for contacting us. You will receive a response within two hours. If you do not receive a response, please send us a WhatsApp message at +91-6384379814.",
          icon: "success",
        });
        resetForm();
      } 
      else 
      {
        throw new Error(data.message);
      }
    } 
    catch (error)
    {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } 
    finally 
    {
      setSubmitting(false);
    }
  };

  return (
    <motion.section>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="text-blue-800 text-2xl sm:text-[26px] font-bold 
            mb-2 sm:text-center md:text-left">{title}</h2>
            <p className="mb-5 text-gray-600 text-sm xs:text-base 
            sm:text-center md:text-left">
              {subTitle}
            </p>

            <FormField name="name" label="Name" placeholder="Your Name *" />
            <FormField name="email" label="Email Address" type="email" placeholder="Enter Your Email Id *" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="bg-blue-600 text-white font-bold w-full rounded-xl py-2 shadow-lg
              hover:bg-plum-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
              active:scale-95 active:bg-plum-700 flex items-center gap-1.5 justify-center"
              disabled={isSubmitting}
            >
             <FiSend className="text-xl"/> {isSubmitting ? "Sending ..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </motion.section>
  );
};

export default ContactUsForm;
