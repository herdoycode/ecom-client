import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
const Login = () => {
  const navigage = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;
    setFormData(data);
  };

  return (
    <div className="login">
      <div className="login__box">
        <h1>Login</h1>
        <form>
          <Input
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type={"password"}
            placeholder={"Enter your password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
          <button className="btn__login">Login</button>
          <button onClick={() => navigage("/signup")} className="btn__account">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
