// src/components/AddressInfo.js
import React from 'react';
import { TextField, Button, Box} from '@mui/material';

const AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (address1 && city && state && zip) {
      nextStep();
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div>
      <h2>Address Information</h2>
      <TextField name="address1" label="Address Line 1" value={address1} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="address2" label="Address Line 2" value={address2} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="city" label="City" value={city} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="state" label="State" value={state} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="zip" label="Zip Code" value={zip} onChange={handleChange} fullWidth margin="normal" />
      <Button variant="contained"  onClick={prevStep}>Back</Button>
      <Box component="span" sx={{ mx: 1 }} />
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </div>
  );
};

export default AddressInfo;
