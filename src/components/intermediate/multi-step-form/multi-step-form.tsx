"use client";
import { type FC, useState } from "react";
import { stepConfig } from "./multi-step-form.config";
import { Field } from "./multi-step-form.types";

const MultiStepForm: FC<{}> = () => {
  // initial form values
  const initialFormData = () => {
    let obj: Record<string, any> = {};
    stepConfig.forEach((step) => {
      step.fields.forEach((field) => {
        if (field.type === "checkbox") {
          obj[field.name] = false;
        } else {
          obj[field.name] = "";
        }
      });
    });
    return obj;
  };

  const [stepIndex, setStepIndex] = useState<number>(0);
  const [form, setForm] = useState<Record<string, any>>(() => initialFormData());
  const [submitting, setSubmitting] = useState<boolean>(false);

  const currentStep = stepConfig[stepIndex];

  // validate current step fields
  const validateStepByConfig = (currentStepConfig: any) => {
    if (!currentStepConfig) return true;
    for (const field of currentStepConfig.fields) {
      const value = form[field.name];
      if (field.required) {
        if (String(value).trim() === "") {
          return false;
        }
      }
    }
    return true;
  };

  // update field handler
  const updateField = (name: string, value: string) => {
    setForm((prevForm: any) => ({ ...prevForm, [name]: value }));
  };

  // Move back handler
  const handleBack = () => {
    setStepIndex((prev) => Math.max(0, prev - 1));
  };

  // Move next handler
  const handleNext = () => {
    if (!validateStepByConfig(currentStep)) return;
    setStepIndex((prev) => Math.min(stepConfig.length - 1, prev + 1));
  };

  // form submission handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("Submitted payload:", form);
      alert("Submitted! Check console for payload.");
      setForm(() => initialFormData());
      setStepIndex(0);
    } catch (err) {
      throw new Error("Form submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  // field mapper handler
  const fieldMapper = (field: any, index: number) => {
    switch (field.type) {
      case "text": {
        return (
          <div className="flex flex-col mb-4" key={index}>
            <label className="mb-1" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              className="h-8 px-2 border-1"
              type="text"
              placeholder={field.placeholder}
              name={field.name}
              required={field.required}
              value={form[field.name] ?? ""}
              onChange={(e) => updateField(field.name, e.target.value)}
            />
          </div>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-xl shadow-md">
      {/* stepper */}
      <div className="mb-6">
        <div className="flex items-center gap-3 justify-between">
          {stepConfig.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div
                className={`h-8 w-8 rounded-md flex items-center justify-center border-2 ${
                  index === stepIndex
                    ? "border-blue-500 bg-blue-500 text-white"
                    : index < stepIndex
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-gray-300"
                }`}
              >
                {step.id}
              </div>
              <div className="text-sm font-semibold">{step.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600"
            style={{
              width: `${
                stepConfig.length > 1
                  ? (stepIndex / (stepConfig.length - 1)) * 100
                  : 100
              }%`,
            }}
          ></div>
        </div>
      </div>
      {/* Form */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          {currentStep.fields.map((field, index) => {
            return fieldMapper(field, index);
          })}
        </div>
        {/* Controls */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer text-white h-10 w-20 font-bold rounded-sm"
            disabled={stepIndex === 0}
            onClick={handleBack}
          >
            Back
          </button>

          {stepIndex < stepConfig.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white h-10 w-20 font-bold rounded-sm"
            >
              Next
            </button>
          )}

          {stepIndex === stepConfig.length - 1 && (
            <button
              type="submit"
              disabled={submitting}
              className={`px-4 py-2 rounded cursor-pointer ${
                submitting
                  ? "bg-gray-200 text-gray-500"
                  : "bg-green-600 text-white"
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
