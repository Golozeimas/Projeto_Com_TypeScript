import { useState, useEffect } from 'react';

interface UsuarioProps {
  usuarioId: number | null;
}

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

function PerfilUsuario({ usuarioId }: UsuarioProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    if (usuarioId === null) {
      setUsuario(null);
      setCarregando(false);
      return;
    }

    setCarregando(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
      .then((resposta) => {
        if (!resposta.ok || resposta.status === 404) {
          throw new Error('Erro ao buscar usuário');
        }

        return resposta.json();
      })
      .then((dados: Usuario) => {
        setUsuario(dados);
      })
      .catch((erro) => {
        console.error('Erro:', erro);
        setUsuario(null);
      })
      .finally(() => {
        setCarregando(false);
      });

    return () => {
      console.log('Limpando ou mudando de usuário...');
    };
  }, [usuarioId]);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (!usuario) {
    return <p>Usuário não encontrado.</p>;
  }

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

export default PerfilUsuario;