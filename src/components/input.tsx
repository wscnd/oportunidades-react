import React from 'react';

const Input = ({
  onChange,
  id,
  name,
  placeholder,
}: {
  name: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <div>
        <input
          id={id}
          name={name}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
