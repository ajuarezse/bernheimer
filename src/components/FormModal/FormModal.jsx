import { useState } from "react";
import "./FormModal.css";

function FormModal({
  isOpen,
  onClose,
  title,
  fields,
  onSubmit,
  submitLabel = "Submit",
}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (
        field.type === "email" &&
        formData[field.name] &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.name])
      ) {
        newErrors[field.name] = "Please enter a valid email address";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({});
    setErrors({});
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

        <form onSubmit={handleSubmit} className="form-modal-form">
          {fields.map((field) => (
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
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 4}
                  className={`form-modal-textarea ${
                    errors[field.name] ? "form-modal-input-error" : ""
                  }`}
                  disabled={isSubmitting}
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className={`form-modal-input ${
                    errors[field.name] ? "form-modal-input-error" : ""
                  }`}
                  disabled={isSubmitting}
                />
              )}

              {errors[field.name] && (
                <span className="form-modal-error">{errors[field.name]}</span>
              )}
            </div>
          ))}

          <div className="form-modal-actions">
            <button
              type="button"
              onClick={handleClose}
              className="form-modal-button form-modal-button-cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-modal-button form-modal-button-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
