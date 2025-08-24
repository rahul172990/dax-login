import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../component/InputField";
import PasswordField from "../component/PasswordField";

function Login() {
  const navigate = useNavigate();
  type FormState = { username: string; password: string };
  type ErrorState = { username?: string; password?: string };

  const [form, setForm] = useState<FormState>({ username: "", password: "" });
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const errs: ErrorState = {};
    if (!form.username) errs.username = "Username required";
    if (!form.password) errs.password = "Password required";

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      alert("Logged in successfully (mock)");
    }
  };

  return (
    <>
      <div className="header">
        <h2>Login</h2>
        <p>Sign in to continue</p>
      </div>
      <div className="container">
        <InputField
          label="USERNAME"
          name="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
        <PasswordField
          label="PASSWORD"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button onClick={handleLogin}>LOGIN</button>
        <p className="link" onClick={() => navigate("/signup")}>
          Don't have Account? SignUp
        </p>
      </div>
    </>
  );
}

export default Login;
