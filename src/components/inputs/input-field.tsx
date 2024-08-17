import React from "react";
import "./styles/input-field.css"

interface InputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  onChange,
  placeholder,
  type,
  value,
}: InputProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}
