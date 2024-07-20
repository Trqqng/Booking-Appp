import React from "react";

const InputField = React.memo(
  ({
    label,
    name,
    type,
    placeholder,
    value,
    error,
    handleChange,
    handleBlur,
  }) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="h-6 mt-2">
        {error ? (
          <p className="text-red-600 text-left">{error}</p>
        ) : (
          <p className="text-transparent text-left">No Error</p>
        )}
      </div>
    </div>
  ),
);

export default InputField;
