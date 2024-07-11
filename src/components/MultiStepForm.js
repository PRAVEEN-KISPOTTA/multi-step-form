// src/components/MultiStepForm.js
import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log('Form submitted', formData);
    alert('Form submitted successfully!');
    // Clear local storage after form submission
    localStorage.removeItem('formData');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
    setStep(1);
  };

  switch (step) {
    case 1:
      return <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <AddressInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Confirmation formData={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return null;
  }
};

export default MultiStepForm;
