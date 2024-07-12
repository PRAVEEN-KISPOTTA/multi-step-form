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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    setIsLoaded(true); // Set isLoaded to true after fetching the data
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

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

  if (!isLoaded) {
    return <div>Loading...</div>; // Display a loading indicator until the form data is loaded
  }

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
