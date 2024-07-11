// src/components/PersonalInfo.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const newErrors = {};

    // Validate fields
    if (!name) {
        newErrors.name = 'Name is required';
    }
    if (!email) {
        newErrors.email = 'Email is required';
    }
    if (email && !emailRegex.test(email)) {
        newErrors.email = 'Invalid email format';
    }
    if (!phone) {
        newErrors.phone = 'Phone number is required';
    }
    if (phone && !phoneRegex.test(phone)) {
        newErrors.phone = 'Invalid phone number format';
    }

    // Set errors
    setErrors(newErrors);

    // If no errors, proceed to next step
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <TextField
        name="name"
        label="Name"
        value={name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        name="phone"
        label="Phone"
        value={phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
      />
      
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </div>
  );
};

export default PersonalInfo;
