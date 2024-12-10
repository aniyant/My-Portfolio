export const Projects = () => {
    return <div>Projects</div>
    <div>sdflk;aj</div>
    <div>lkdsfj;a</div>4
    import React, { useState } from 'react';
import axios from 'axios';

const AmbulanceRequestForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
    ambulanceType: 'ALS',
    distance: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/ambulance-request', formData);
      alert(`Request submitted successfully! ID: ${response.data.id}`);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit the request.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pickup Location:
        <input type="text" name="pickupLocation" value={formData.pickupLocation


}