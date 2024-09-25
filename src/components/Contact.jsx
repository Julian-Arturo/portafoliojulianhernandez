import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import PropTypes from 'prop-types'; 

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_5cim3qh",
        "template_17ipmuc",
        {
          from_name: form.name,
          to_name: "Julian Hernandez FE Developer",
          from_email: form.email,
          to_email: "julianarturo1216@gmail.com",
          message: form.message,
        },
        "1KHc61N_q7JTuP-i6"
      );
      toast.success("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            placeholder="What's your good name?"
            onChange={handleChange}
          />
          <InputField
            label="Your Email"
            name="email"
            type="email"
            value={form.email}
            placeholder="What's your web address?"
            onChange={handleChange}
          />
          <TextAreaField
            label="Your Message"
            name="message"
            value={form.message}
            placeholder="What you want to say?"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const InputField = ({ label, name, value, placeholder, onChange, type = "text" }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

const TextAreaField = ({ label, name, value, placeholder, onChange }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <textarea
      rows={7}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const WrappedContact = SectionWrapper(Contact, "contact", "");
export default WrappedContact;
