
// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        onLogin(username.trim());
        navigate("/");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: ".5rem", marginBottom: "1rem", width: "100%" }}
                />
                <button type="submit" style={{ padding: ".5rem 1rem" }}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;
