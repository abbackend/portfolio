import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../utils/styles";
import { EarthCanvas } from "./canvas";
import StarCanvas from "./canvas/Stars";

const Contact = () => {
  const formRef = useRef();
  const initial = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (
      !form.name ||
      !form.email ||
      !form.message ||
      !emailRegex.test(form.email) ||
      form.message.length < 10 ||
      form.name.length < 3
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (disable) {
      alert("Do not interfere with code😎");
      return;
    }

    window.location.replace(`mailto:abbackend98@gmail.com?subject=Portfolio Contact | ${form.name}&body=${form.message}`);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-4 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your E-mail?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium"
            />
          </label>

          <button
            disabled={disable}
            className={`${
              disable ? "bg-[#2f2f2f] text-[#808080]" : "text-white bg-tertiary"
            } py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl`}
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 max-h-[700px] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <StarCanvas />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
