import { useState } from "react";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const PasswordField = ({
  label,
  name,
  value,
  onChange,
  error,
}: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="form-group password-wrapper">
      <label>{label}</label>
      <div className="bottom-border">
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <span className="eye-icon" onClick={() => setShow(!show)}>
          👁️
        </span>
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default PasswordField;
