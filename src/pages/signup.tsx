import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../component/InputField";
import PasswordField from "../component/PasswordField";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirm?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err: {
      name?: string;
      username?: string;
      email?: string;
      phone?: string;
      password?: string;
      confirm?: string;
    } = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const userRegex = /^[a-zA-Z0-9@#$%^&+=]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (!nameRegex.test(form.name)) err.name = "Only alphabets allowed";
    if (!userRegex.test(form.username)) err.username = "Invalid username";
    if (!emailRegex.test(form.email)) err.email = "Only Gmail allowed";
    if (!phoneRegex.test(form.phone)) err.phone = "Use +CountryCode & number";
    if (!userRegex.test(form.password)) err.password = "Invalid password";
    if (form.password !== form.confirm) err.confirm = "Passwords must match";
    if (form.username === form.password) err.password = "Password ≠ Username";

    return err;
  };

  const handleSignup = () => {
    const err = validate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      alert("Sign-up success (mock)");
      navigate("/");
    }
  };

  return (
    <>
      <div className="header">
        <h2>Create new Account</h2>
      </div>
      <div className="container">
        <div className="form-row">
          <InputField
            label="NAME"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="USERNAME"
            name="username"
            value={form.username}
            onChange={handleChange}
            error={errors.username}
          />
        </div>
        <div className="form-row">
          <InputField
            label="EMAIL"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="PHONE NO."
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>
        <div className="form-row">
          <PasswordField
            label="PASSWORD"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
          <PasswordField
            label="CONFIRM PASSWORD"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            error={errors.confirm}
          />
        </div>
        <button onClick={handleSignup}>SIGN UP</button>
        <p className="link" onClick={() => navigate("/")}>
          Already have an Account? Sign In
        </p>
      </div>
    </>
  );
}

export default SignUp;
