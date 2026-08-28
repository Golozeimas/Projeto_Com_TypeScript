import { useState, useEffect } from 'react';

function PerfilUsuario({ usuarioId }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);

    // Efeito: busca dados da API sempre que 'usuarioId' mudar
    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setUsuario(dados);
        setCarregando(false);
      });

    // Cleanup (opcional): executado antes do próximo efeito ou quando o componente é desmontado
    return () => {
      console.log('Limpando ou mudando de usuário...');
    };
  }, [usuarioId]); // Array com dependência: roda novamente se 'usuarioId' for alterado

  if (carregando) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
    </div>
  );
}