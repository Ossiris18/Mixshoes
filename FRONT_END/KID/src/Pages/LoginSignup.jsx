import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css'; // Asegúrate de que la ruta sea correcta

const LoginSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState(''); // Estado para mostrar la respuesta de la API

    const handleRegisterClick = async () => {
        const registerData = {
            correoElectronico: email,
            contrasena: password,
        };

        try {
            const response = await fetch('http://localhost:5045/api/Seguridad/Registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(registerData), // Convertir a JSON
            });

            if (response.ok) {
                const data = await response.json(); // Suponiendo que la respuesta es JSON
                setResponseMessage('Registro exitoso!'); // Mensaje de éxito
                navigate('/Login'); // Redirigir a la página de Login
            } else {
                setResponseMessage('Error al registrar'); // Mensaje de error
            }
        } catch (error) {
            setResponseMessage('Error de conexión'); // Mensaje de error de conexión
            console.error('Error:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/Login'); // Navegar a la página de inicio de sesión
    };

    return (
        <div className="form-container">
            <h2>Regístrate</h2>
            <div className="input-group">
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button className="register-button" onClick={handleRegisterClick}>
                    Registrarse
                </button>
                <button className="login-button" onClick={handleLoginClick}>
                    Iniciar Sesión
                </button>
            </div>
            <p>{responseMessage}</p> {/* Mostrar la respuesta de la API */}
        </div>
    );
};

export default LoginSignup;