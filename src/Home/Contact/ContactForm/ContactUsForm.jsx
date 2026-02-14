import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import { FiSend } from "react-icons/fi";
import FormField from "./FormField";
import { ValidationSchema } from "./ValidationSchema";

const title = "Send Me a Message";
const subTitle = "Fill out the form below and I'll get back to you within 24 hours.";
const accessKey = "8194d823-65a0-4794-8886-1f0e1cccb8b8";

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "MESSAGE SENT!",
          text: "Thank you for contacting me. I’ll respond shortly.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-2xl p-5 sm:p-6"
    >
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="text-blue-800 text-2xl sm:text-3xl font-bold mb-2">
              {title}
            </h2>

            <p className="mb-5 text-gray-600 text-base sm:text-lg">
              {subTitle}
            </p>

            <FormField name="name" label="Name" placeholder="Your Name *" />
            <FormField
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter Your Email *"
            />
            <FormField
              name="message"
              label="Message (Optional)"
              as="textarea"
              placeholder="Your Message"
              style={{ height: "180px", padding: "10px" }}
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white font-bold w-full rounded-xl py-2
              shadow-lg flex items-center gap-2 justify-center"
            >
              <FiSend className="text-xl" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default ContactUsForm;
