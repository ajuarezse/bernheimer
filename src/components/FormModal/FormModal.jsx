import { useState, useEffect, useRef } from "react";
import "./FormModal.css";
import { useEmailForm } from "../../hooks/useEmailForm";

function FormModal({ isOpen, onClose, title, fields, submitLabel = "Submit" }) {
  const {
    formData: emailFormData,
    formStatus,
    canSubmit,
    isFormValid,
    handleChange: handleEmailChange,
    handleSubmit: handleEmailSubmit,
    resetForm,
  } = useEmailForm({
    templateId: import.meta.env.VITE_EMAILJS_PURCHASE_TEMPLATE_ID,
    storageKey: "lastPurchaseSubmit",
  });

  const [errors, setErrors] = useState({});
  const formOpenTime = useRef(null);

  // Track when form opens for time-based validation
  useEffect(() => {
    if (isOpen) {
      formOpenTime.current = Date.now();
      resetForm();
      setErrors({});
    }
  }, [isOpen, resetForm]);

  const handleChange = (fieldName, value) => {
    // Map field names to EmailJS format
    const emailFieldMap = {
      name: "from_name",
      email: "reply_to",
      message: "message",
    };

    const emailFieldName = emailFieldMap[fieldName] || fieldName;
    handleEmailChange({ target: { name: emailFieldName, value } });

    // Clear error for this field when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const validateField = (fieldName, value) => {
    const field = fields.find((f) => f.name === fieldName);
    if (!field) return;

    const newErrors = { ...errors };

    if (field.required && !value?.trim()) {
      newErrors[fieldName] = `${field.label} is required`;
    } else if (
      field.type === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      newErrors[fieldName] = "Please enter a valid email address";
    } else {
      delete newErrors[fieldName];
    }

    setErrors(newErrors);
  };

  const handleBlur = (fieldName) => {
    const fieldValue =
      fieldName === "name"
        ? emailFormData.from_name
        : fieldName === "email"
        ? emailFormData.reply_to
        : emailFormData.message;

    validateField(fieldName, fieldValue);
  };

  const validateForm = () => {
    const newErrors = {};

    // Time-based check - humans take at least 2 seconds to fill a form
    const timeElapsed = Date.now() - (formOpenTime.current || 0);
    if (timeElapsed < 2000) {
      console.warn("Spam detected: form submitted too quickly");
      setErrors({ general: "Please take your time filling out the form." });
      return false;
    }

    fields.forEach((field) => {
      const fieldValue =
        field.name === "name"
          ? emailFormData.from_name
          : field.name === "email"
          ? emailFormData.reply_to
          : emailFormData.message;

      if (field.required && !fieldValue?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (
        field.type === "email" &&
        fieldValue &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)
      ) {
        newErrors[field.name] = "Please enter a valid email address";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }

    await handleEmailSubmit(e);

    // Close modal on success
    if (!formStatus.error) {
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    resetForm();
    setErrors({});
    formOpenTime.current = null;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="form-modal-overlay" onClick={handleClose}>
      <div className="form-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="form-modal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="form-modal-title">{title}</h2>

        <p className="form-modal-description">
          Please fill out the form below and we'll get back to you about your
          purchase inquiry.
        </p>

        {formStatus.success && (
          <div className="form-modal-success">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        {formStatus.error && (
          <div className="form-modal-error-message">{formStatus.error}</div>
        )}

        <form onSubmit={handleSubmit} className="form-modal-form">
          {/* Honeypot field - hidden from users, bots will fill it */}
          <input
            type="text"
            name="honeypot"
            value={emailFormData.honeypot}
            onChange={handleEmailChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          {errors.general && (
            <div className="form-modal-general-error">{errors.general}</div>
          )}

          {fields.map((field) => {
            const fieldValue =
              field.name === "name"
                ? emailFormData.from_name
                : field.name === "email"
                ? emailFormData.reply_to
                : emailFormData.message;

            return (
              <div key={field.name} className="form-modal-field">
                <label htmlFor={field.name} className="form-modal-label">
                  {field.label}
                  {field.required && (
                    <span className="form-modal-required">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={fieldValue || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    onBlur={() => handleBlur(field.name)}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    className={`form-modal-textarea ${
                      errors[field.name] ? "form-modal-input-error" : ""
                    }`}
                    disabled={formStatus.loading}
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type || "text"}
                    name={field.name}
                    value={fieldValue || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    onBlur={() => handleBlur(field.name)}
                    placeholder={field.placeholder}
                    className={`form-modal-input ${
                      errors[field.name] ? "form-modal-input-error" : ""
                    }`}
                    disabled={formStatus.loading}
                  />
                )}

                {errors[field.name] && (
                  <span className="form-modal-error">{errors[field.name]}</span>
                )}
              </div>
            );
          })}

          <div className="form-modal-actions">
            <button
              type="button"
              onClick={handleClose}
              className="form-modal-button form-modal-button-cancel"
              disabled={formStatus.loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-modal-button form-modal-button-submit"
              disabled={formStatus.loading || !canSubmit || !isFormValid}
            >
              {formStatus.loading ? "Sending..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
