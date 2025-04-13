import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/first');
        setUser(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); 
//reactquery para simplificar todo esto 
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No se encontró ningún usuario.</div>;
  }

  return (
    <div className="App">
      <h1>Datos del Usuario</h1>
      {user && (
        <div>
          <p>id: {user.id}</p>
          <p>nombre: {user.nombre}</p>
          <p>correo: {user.correo}</p>
          <p>password: {user.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;

