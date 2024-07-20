const validate = {
  fullName: (value) => {
    if (value === "__NULL__") return "Full name is required";
    if (!value) return "Full name is required";
    if (value.length < 5) return "Full name must be at least 5 characters long";
    return "";
  },
  email: (value) => {
    if (value === "__NULL__") return "Email is required";
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email address is invalid";
    return "";
  },
  phoneNumber: (value) => {
    if (value === "__NULL__") return "Phone number is required";
    if (!value) return "Phone number is required";
    if (!/^\d{10}$/.test(value))
      return "Phone number must be exactly 10 digits";
    return "";
  },
  address: (value) => {
    if (value === "__NULL__") return "Address is required";
    if (!value) return "Address is required";
    return "";
  },
  password: (value) => {
    if (value === "__NULL__") return "Password is required";
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters long";
    return "";
  },
  cardNumber: (value) => {
    if (value === "__NULL__") return "CardNumber number is required";
    if (!value) return "Card number is required";
    if (!/^\d{10}$/.test(value)) return "Card number must be exactly 10 digits";
    return "";
  },
};

export default validate;
