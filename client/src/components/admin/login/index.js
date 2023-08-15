import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { adminLogin } from "../../../actions";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill all the fields");
    } else {
      const formData = {
        username: username,
        password: password,
      };
      dispatch(adminLogin(formData, navigate));
    }
  };
  return (
    <>
      <div className="login-card">
        <div className="card-header">
          <div className="log">Login</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="admin-label">
              Username:
            </label>
            <input
              required=""
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="admin-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="admin-label">
              Password:
            </label>
            <input
              required=""
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
            />
          </div>
          <div className="form-group">
            <input
              defaultValue="Login"
              type="submit"
              className="admin-submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
