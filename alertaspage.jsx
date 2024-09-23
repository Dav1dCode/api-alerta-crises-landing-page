import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const AlertasPage = () => {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    const fetchAlertas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/alertas');
        setAlertas(response.data);
      } catch (error) {
        console.error('Erro ao buscar alertas:', error);
      }
    };

    fetchAlertas();
  }, []);

  return (
    <div>
      <header>
        <h1>Alertas de Crises em Belo Horizonte</h1>
      </header>
      <main>
        <section id="alertas">
          <h2>Alertas Recentes</h2>
          <ul id="lista-alertas">
            {alertas.map(alerta => (
              <li key={alerta.id}>
                <strong>{alerta.tipo}</strong>: {alerta.descricao} - {alerta.local} (Gravidade: {alerta.gravidade}) em {alerta.data}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 - Sistema de Alerta de Crises</p>
      </footer>
    </div>
  );
}

export default AlertasPage;
