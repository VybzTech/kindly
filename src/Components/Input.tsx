import React from "react";
type InputProps = {
  name: string;
  label: string;
  placeholder: string;
};
const Input = ({ name, label,placeholder }: InputProps) => {
  return (
    <div className="formGroup flex flex-col">
      <label htmlFor={name} className="text-black-400 font-semibold pl-0.5 mt-3 mb-1">{label}</label>
      <input placeholder={placeholder} className="low-shade border w-full rounded rounded-lg m-auto p-1.5 px-3 focus:outline-none" type="text" name={name} id={name} />
    </div>
  );
};

export default Input;
