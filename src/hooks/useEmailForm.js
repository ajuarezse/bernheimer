import { useState, useMemo, useCallback } from "react";
import emailjs from "@emailjs/browser";

export const useEmailForm = ({ templateId, storageKey }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    honeypot: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const [canSubmit, setCanSubmit] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = useCallback(() => {
    setFormData({ from_name: "", reply_to: "", message: "", honeypot: "" });
  }, []);

  const isFormValid = useMemo(() => {
    const { from_name, reply_to, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      from_name.trim() !== "" &&
      reply_to.trim() !== "" &&
      emailRegex.test(reply_to) &&
      message.trim() !== ""
    );
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    const lastSubmit = localStorage.getItem(storageKey);
    const now = Date.now();
    const cooldownPeriod = 60000;

    if (lastSubmit && now - parseInt(lastSubmit) < cooldownPeriod) {
      const remainingTime = Math.ceil(
        (cooldownPeriod - (now - parseInt(lastSubmit))) / 1000
      );
      setFormStatus({
        loading: false,
        success: false,
        error: `Please wait ${remainingTime} seconds before submitting again.`,
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: "" });

    try {
      const { honeypot, ...emailData } = formData;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      localStorage.setItem(storageKey, now.toString());

      setFormStatus({ loading: false, success: true, error: "" });
      resetForm();

      setCanSubmit(false);
      setTimeout(() => {
        setCanSubmit(true);
      }, cooldownPeriod);

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: "" });
      }, 5000);
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return {
    formData,
    formStatus,
    canSubmit,
    isFormValid,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
