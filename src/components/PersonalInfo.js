// src/components/PersonalInfo.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (name && email && phone) {
      nextStep();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <TextField name="name" label="Name" value={name} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="email" label="Email" type="email" value={email} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="phone" label="Phone" value={phone} onChange={handleChange} fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </div>
  );
};

export default PersonalInfo;
