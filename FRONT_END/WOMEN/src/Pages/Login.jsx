import { useEffect, useState } from "react";
import './CSS/Login.css';// Asegúrate de que la ruta sea correcta

function Login() {
  const [responseMessage, setResponseMessage] = useState('');
  const [email, setEmail] = useState(''); // Estado para el correo
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [isSubmitted, setIsSubmitted] = useState(false); // Para saber si se envió el formulario

  // Función para hacer la solicitud POST
  const postUserData = async () => {
    const loginData = {
      usuario: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5045/api/Seguridad/IniciarSesion", {
        method: "POST", // Especificamos el método POST
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify(loginData), // Enviamos los datos en formato JSON
      });

      // Si la respuesta es exitosa
      if (response.ok) {
        const data = await response.text(); // Se recibe la respuesta como texto
        setResponseMessage(data); // Actualiza el estado con la respuesta del servidor
      } else {
        setResponseMessage('Error en la solicitud');
      }
    } catch (error) {
      setResponseMessage('Error de conexión');
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      postUserData(); // Llamamos a la función cuando el formulario es enviado
    }
  }, [isSubmitted]); // Dependencia de isSubmitted

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true); // Indicar que se ha enviado el formulario
  };

  return (
    <div>
      <section>
        <h3>Inicia secion</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualizamos el estado
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </section>

      <section>
        <h3>Respuesta del servidor:</h3>
        <p>{responseMessage}</p> {/* Mostrar la respuesta de la API */}
      </section>
    </div>
  );
}

export default Login;
