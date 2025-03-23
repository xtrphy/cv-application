import MyInput from "./MyInput/MyInput";

import React from 'react';

const FormSection = ({ title, fields, generalInfo, setGeneralInfo, disabled }) => {
  return (
    <form>
      <h2 style={{ marginBottom: '20px' }}>{title}</h2>
      {fields.map((field) => (
        <MyInput
          key={field.name}
          disabled={disabled}
          placeholder={field.placeholder}
          onChange={(e) => setGeneralInfo({ ...generalInfo, [field.name]: e.target.value })}
          value={generalInfo[field.name]}
          type={field.type}
        />
      ))}
    </form>
  );
};

export default FormSection;