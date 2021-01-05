import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';

import api from '../../services/api';

interface UserProps {
  id: string;
  cpf: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  whatsapp: string;
  empresa_instituicao: string;
  cep: string;
  endereco_completo: string;
  estado_uf: string;
  municipio: string;
  eventos: Array<{
    id: string;
    segmento: string;
    nome_evento: string;
    orgao_autoridade: string;
    turismo_categorias: string;
    descricao_motivo: string;
  }>;
}

const Relatorio: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [allUser, setAllUser] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
      setAllUser(response.data);
      console.log(response.data);
    });
  }, []);

  const csvLabel = ["CPF", "Nome", "Sobrenome", "E-mails", "Telefone", "WhatsApp",
    "Empresa/Instituição", "CEP", "Endereço Completo", "Estado (UF)", "Município",
    "Eventos", "Nome do Evento", "Órgão/Autoridade", "Turismo Categoria", "Descrição/Motivo"];

  const csvData = allUser.map(data =>
    [data.cpf, data.nome, data.sobrenome, data.email, data.telefone, data.whatsapp,
      data.empresa_instituicao, data.cep, data.endereco_completo, data.estado_uf,
      data.municipio, data.eventos.map(ev => [ev.segmento]),
      data.eventos.map(ev => [ev.nome_evento]), data.eventos.map(ev => [ev.orgao_autoridade]),
      data.eventos.map(ev => [ev.turismo_categorias]), data.eventos.map(ev => [ev.descricao_motivo])]
  );

  return (
    <div>

      {users?.map((user) => (
        <ul key={user.id}>
          <li>{user.cpf}</li>
          <li>{user.nome}</li>
          <li>{user.sobrenome}</li>
          <li>{user.email}</li>
          <li>{user.telefone}</li>
          <li>{user.whatsapp}</li>
          <li>{user.empresa_instituicao}</li>
          <li>{user.cep}</li>
          <li>{user.endereco_completo}</li>
          <li>{user.estado_uf}</li>
          <li>{user.municipio}</li>
          <li>{user.eventos.map(evento => (
            <ul key={evento.id}>
              <li>{evento.segmento}</li>
              <li>{evento.nome_evento}</li>
            </ul>
          ))}</li>
          <br />
          {/* <CSVLink
            data={[
              { Nome: user.nome, Sobrenome: user.sobrenome, Email: user.email },
            ]}
          >
            Download CSV
          </CSVLink> */}
        </ul>
      ))}
      <CSVLink
        headers={csvLabel}
        data={csvData}
        filename={"setur-planilha-completa.csv"}
      >Planilha Completa</CSVLink>
    </div>
  );
};

export default Relatorio;
