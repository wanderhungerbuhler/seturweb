import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

// API
import api from '../../services/api';

// VALIDATION ERRORS
import getValidationErrors from '../../utils/getValidationErrors';

// ICONS
import { FiCreditCard, FiAlignLeft, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaRegBuilding } from 'react-icons/fa';

// STYLES
import { Container, ButtonRegister } from './styles';

// COMPONENTS
import InputMask from '../../components/InputMask';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Notifications from '../../components/Notifications';

// PAGES
import Header from '../Header';

interface FormDataProps {
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

  segmentos: string;
  nome_evento: string;
  orgao_autoridade: string;
  nome_categoria_turismo: string;
  descricao_motivo: string;
}

interface IBGEUFResponse {
  sigla: string;
}

const Eventos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [segmentos, setSegmentos] = useState();
  const [notifications, setNotifications] = useState();

  const handleSelectSegmentos = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSegmentos(event.target.value as any);
  },[]);

  const handleSubmit = useCallback(
    async (data: FormDataProps) => {
      const {
        cpf,
        nome,
        sobrenome,
        email,
        telefone,
        whatsapp,
        empresa_instituicao,
        cep,
        estado_uf,
        endereco_completo,
        municipio,

        segmentos,
        nome_evento,
        orgao_autoridade,
        nome_categoria_turismo,
        descricao_motivo,
      } = data;

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cpf: Yup.string().required('CPF obrigatório'),
          nome: Yup.string().required('Nome obrigatório'),
          sobrenome: Yup.string().required('Sobrenome obrigatório'),
          email: Yup.string()
            .email('Digite um E-mail válido')
            .required('E-mail obrigatório'),
          telefone: Yup.string().optional(),
          whatsapp: Yup.string().optional(),
          empresa_instituicao: Yup.string().optional(),
          cep: Yup.string().optional(),
          estado_uf: Yup.string().optional(),
          endereco_completo: Yup.string().optional(),
          municipio: Yup.string().optional(),
          segmentos: Yup.string().required('Segmento obrigatório'),
          nome_evento: Yup.string().optional(),
          orgao_autoridade: Yup.string().optional(),
          nome_categoria_turismo: Yup.string().optional(),
          descricao_motivo: Yup.string().required('Descrição obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/users', {
          cpf,
          nome,
          sobrenome,
          email,
          password: data.cpf,
          telefone,
          whatsapp,
          empresa_instituicao,
          cep,
          endereco_completo,
          estado_uf,
          municipio,

          segmentos,
          nome_evento,
          orgao_autoridade,
          nome_categoria_turismo,
          descricao_motivo,
          status: 'Cadastrado',
        });

        setNotifications(response.status as any);

        setTimeout(() => {
          history.push('/');
        }, 2500);

      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },[history]);

  return (
    <>
      { notifications && <Notifications /> }
      <Header children="Eventos" />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <h2>Dados Pessoais</h2>
            <InputMask label="Digite seu CPF" icon={FiCreditCard} mask="999.999.999-99"
              name="cpf" />
            <Input label="Nome" icon={FiAlignLeft} name="nome" />
            <Input label="Sobrenome" icon={FiAlignLeft} name="sobrenome" />
            <Input label="Email" icon={FiMail} name="email" />
            <InputMask label="Telefone" icon={FiPhone} mask="(99) 9999-9999"
              name="telefone" />
            <InputMask label="WhatsApp" icon={FaWhatsapp} mask="(99) 99999-9999"
              name="whatsapp" />
          </div>

          <div>
            <h2>Informações Adicionais</h2>
            <Input
              label="Empresa/Instituição"
              icon={FaRegBuilding}
              name="empresa_instituicao"
            />

            <InputMask
              label="CEP"
              icon={FaRegBuilding}
              mask="99999-999"
              name="cep"
            />

            <Input
              label="Endereço (Rua, Av, Apto)"
              icon={FaRegBuilding}
              name="endereco_completo"
            />

            <Select
              label="Estado (UF)"
              name="estado_uf"
              options={[
                  { value: "RO", label: "RO" },
                  { value: "AC", label: "AC" },
                  { value: "AM", label: "AM" },
                  { value: "RR", label: "RR" },
                  { value: "PA", label: "PA" },
                  { value: "AP", label: "AP" },
                  { value: "TO", label: "TO" },
                  { value: "MA", label: "MA" },
                  { value: "PI", label: "PI" },
                  { value: "CE", label: "CE" },
                  { value: "RN", label: "RN" },
                  { value: "PB", label: "PB" },
                  { value: "PE", label: "PE" },
                  { value: "AL", label: "AL" },
                  { value: "SE", label: "SE" },
                  { value: "BA", label: "BA" },
                  { value: "MG", label: "MG" },
                  { value: "ES", label: "ES" },
                  { value: "RJ", label: "RJ" },
                  { value: "SP", label: "SP" },
                  { value: "PR", label: "PR" },
                  { value: "SC", label: "SC" },
                  { value: "RS", label: "RS" },
                  { value: "MS", label: "MS" },
                  { value: "MT", label: "MT" },
                  { value: "GO", label: "GO" },
                  { value: "DF", label: "DF" },
              ]}
            />

            <Input
              label="Município"
              icon={FaRegBuilding}
              name="municipio"
            />

            <Select
              label="Segmentos"
              name="segmentos"
              options={[
                { value: 'Artesanato', label: 'Artesanato' },
                { value: 'Autoridades', label: 'Autoridades' },
                { value: 'Cadastur', label: 'Cadastur' },
                { value: 'Eventos', label: 'Eventos' },
                { value: 'Gastronomia', label: 'Gastronomia' },
                { value: 'Turismo', label: 'Turismo' },
              ]}
              onChange={(event) => handleSelectSegmentos(event)}
            />

            { segmentos === 'Eventos' ? (
              <Input
                label="Nome do Evento"
                icon={FiAlignLeft}
                name="nome_evento"
              />
            ) : null}

            { segmentos === 'Autoridades' ? (
              <Input
                label="Órgão"
                icon={FiAlignLeft}
                name="orgao_autoridade"
              />
            ) : null}

            { segmentos === 'Turismo' ? (
              <Input
                label="Categorias"
                icon={FiAlignLeft}
                name="nome_categoria_turismo"
              />
            ) : null}

            <Input
              label="Descrição/Motivo"
              name="descricao_motivo"
            />

            <ButtonRegister type="submit">Finalizar Cadastro</ButtonRegister>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Eventos;
