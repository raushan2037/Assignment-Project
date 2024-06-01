import React, { useState, useEffect } from 'react';
const formatDateTime = (date) => {
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  const formattedDate = date.toLocaleDateString('en-GB', dateOptions); // en-GB for dd/mm/yyyy
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions); // en-US for AM/PM format

  return `${formattedDate} (${formattedTime})`;
};
const SaleOrderForm = ({ order, onSave, readOnly }) => {
  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString('en-US', options);
  };

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    lastModified: formatDateTime(new Date()),
  });

  useEffect(() => {
    if (order) {
      setFormData(order);
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <div>
        <label>ID</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          readOnly={!!order}
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          readOnly={readOnly}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          readOnly={readOnly}
        />
      </div>
      {!readOnly && <button type="submit">{order ? 'Save' : 'Add'}</button>}
    </form>
  );
};

export default SaleOrderForm;