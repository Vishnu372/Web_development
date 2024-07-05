const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  if (!formData.name || !formData.email || !formData.degree || !formData.contactNumber || !formData.age) {
    alert('Please fill out all fields');
    setSubmitting(false);
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      setSuccessMessage('Registration successful!');
      setFormClosed(true);
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Registration failed. Please try again later.');
  } finally {
    setSubmitting(false);
  }
};
