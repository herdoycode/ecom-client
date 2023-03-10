import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { Button, Paper } from "@mui/material";
const Signup = () => {
  const navigage = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;
    setFormData(data);
  };
  return (
    <div className="signup">
      <Paper className="signup__box">
        <h1>Signup</h1>
        <form>
          <Input
            type={"name"}
            placeholder={"Enter your full name"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
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
          <Button variant="contained">Signup</Button>
          <a onClick={() => navigage("/login")} className="login__text">
            Already have account? Login
          </a>
        </form>
      </Paper>
    </div>
  );
};

export default Signup;
