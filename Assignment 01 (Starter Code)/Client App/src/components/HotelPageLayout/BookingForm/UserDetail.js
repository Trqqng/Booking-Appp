import React, { useEffect } from "react";
import InputField from "../../Card/InputField";
import validate from "../../../ulit/validate";
import { useSelector } from "react-redux";

const UserDetail = ({
  formValues,
  formErrors,
  handleFieldChange,
  handleFieldBlur,
  setInitialValues, // Thêm hàm setInitialValues từ useFormValidation
}) => {
  const user = useSelector((state) => state.auth.user);
  console.log("UserDetail re-render");

  useEffect(() => {
    if (user) {
      setInitialValues({
        fullName: user.userName ?? "",
        email: user.email ?? "",
        phoneNumber: user.phone ?? "",
        cardNumber: user.cardNumber ?? "",
      });
    }
  }, [user, setInitialValues]);

  return (
    <div className="mb-6">
      <InputField
        label="Your Full Name"
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={user ? user.userName : formValues.fullName || ""}
        error={formErrors.fullName}
        handleChange={
          user ? undefined : handleFieldChange("fullName", validate.fullName)
        }
        handleBlur={
          user ? undefined : handleFieldBlur("fullName", validate.fullName)
        }
        readOnly={!!user}
      />
      <InputField
        label="Your Email"
        name="email"
        type="email"
        placeholder="Email"
        value={user ? user.email : formValues.email || ""}
        error={formErrors.email}
        handleChange={
          user ? undefined : handleFieldChange("email", validate.email)
        }
        handleBlur={user ? undefined : handleFieldBlur("email", validate.email)}
        readOnly={!!user}
      />
      <InputField
        label="Your Phone Number"
        name="phoneNumber"
        type="text"
        placeholder="Phone Number"
        value={user ? user.phone : formValues.phoneNumber || ""}
        error={formErrors.phoneNumber}
        handleChange={handleFieldChange("phoneNumber", validate.phoneNumber)}
        handleBlur={
          user
            ? undefined
            : handleFieldBlur("phoneNumber", validate.phoneNumber)
        }
        readOnly={!!user}
      />
      <InputField
        label="Your Identity Card Number"
        name="cardNumber"
        type="text"
        placeholder="Card Number"
        value={user ? user.cardNumber : formValues.cardNumber || ""}
        error={formErrors.cardNumber}
        handleChange={handleFieldChange("cardNumber", validate.cardNumber)}
        handleBlur={
          user ? undefined : handleFieldBlur("cardNumber", validate.cardNumber)
        }
        readOnly={!!user}
      />
    </div>
  );
};

export default React.memo(UserDetail);
