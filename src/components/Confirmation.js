// src/components/Confirmation.js
import React from 'react';
import { Button, Box, Stack } from '@mui/material';

const Confirmation = ({ formData, prevStep, submitForm }) => {
  return (
    <Stack spacing={2}>
      <h2>Confirmation</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address Line 1:</strong> {formData.address1}</p>
      <p><strong>Address Line 2:</strong> {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Zip Code:</strong> {formData.zip}</p>
      <div>
        <Button variant="contained" onClick={prevStep}>Back</Button>
        <Box component="span" sx={{ mx: 1 }} />
        <Button variant="contained" color="primary" onClick={submitForm}>Submit</Button>
      </div>
    </Stack>
  );
};

export default Confirmation;
