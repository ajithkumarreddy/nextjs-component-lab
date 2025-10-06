"use client";
import { useState } from "react";
import { stepConfig } from "./multi-step-form.config";

const MultiStepForm = () => {
  // initial form values
  const initialForm = () => {
    let obj: any = {};
    stepConfig.forEach((step) => {
      step.fields.forEach((field) => {
        if (field.type === "checkbox") {
          obj[field.name] = false;
        }
        obj[field.name] = "";
      });
    });
  };

  const [stepIndex, setStepIndex] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-12 bg-white rounded-2xl shadow-md">
      {/* stepper */}
      <div className="mb-6">
        <div className="flex items-center gap-3 justify-between">
          {stepConfig.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div
                className={`h-8 w-8 rounded-md flex items-center justify-center border-2 ${
                  step.id === stepIndex
                    ? "border-blue-500 bg-blue-500 text-white"
                    : step.id < stepIndex
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-gray-300"
                }`}
              >
                {step.id}
              </div>
              <div>{step.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600"
            style={{
              width: `${(stepIndex - 1 / (stepConfig.length - 1)) * 100}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
