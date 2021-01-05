import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

// API
import api from '../../services/api';

// VALIDATION ERRORS
// import getValidationErrors from '../../utils/getValidationErrors';

// ICONS
import { FiCreditCard, FiAlignLeft, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// STYLES
import { Container, ButtonRegister } from './styles';

// COMPONENTS
import InputMask from '../../components/InputMask';
import Input from '../../components/Input';
import Select from '../../components/Select';

// PAGES
import Header from '../Header';

interface FormDataProps {
  cpf: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  whatsapp: string;
  data_agendamento: string;
  hora_agendamento: string;
  descricao_motivo: string;
}

const Cadastur: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormDataProps) => {
      const {
        cpf,
        nome,
        sobrenome,
        email,
        telefone,
        whatsapp,
        data_agendamento,
        hora_agendamento,
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
          descricao_motivo: Yup.string().required('Descrição obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/cadastur', {
          cpf,
          nome,
          sobrenome,
          email,
          telefone,
          whatsapp,
          data_agendamento,
          hora_agendamento,
          descricao_motivo,
          status: 'Agendado',
        });

        alert('Usuário agendado com sucesso!');
        history.push('/');
      } catch (err) {
        // const erros = getValidationErrors(err);
        // formRef.current?.setErrors(erros);
      }

      console.log(data);
    },
    [history]
  );

  return (
    <>
      <Header children="Cadastur" />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <h2>Dados Pessoais</h2>
            <InputMask
              label="Digite seu CPF"
              icon={FiCreditCard}
              mask="999.999.999-99"
              name="cpf"
            />
            <Input label="Nome" icon={FiAlignLeft} name="nome" />
            <Input label="Sobrenome" icon={FiAlignLeft} name="sobrenome" />
            <Input label="Email" icon={FiMail} name="email" />
            <InputMask
              label="Telefone"
              icon={FiPhone}
              mask="(99) 9999-9999"
              name="telefone"
            />
          </div>

          <div>
            <h2>Informações Adicionais</h2>

            <InputMask
              label="WhatsApp"
              icon={FaWhatsapp}
              mask="(99) 99999-9999"
              name="whatsapp"
            />

            <Select
              placeholder="Selecione a Data"
              label="Qual a melhor Data?"
              name="data_agendamento"
              id="data_agendamento"
              options={[
                { value: '14/10/2020', label: '14/10/2020' },
                { value: '15/10/2020', label: '15/10/2020' },
              ]}
            />

            <Select
              placeholder="Selecione o Horário"
              label="Qual a melhor Horário?"
              name="hora_agendamento"
              id="hora_agendamento"
              options={[
                { value: '10:30', label: '10:30' },
                { value: '11:00', label: '11:00' },
                { value: '11:30', label: '11:30' },
              ]}
            />

            <Input
              label="Descrição/Motivo"
              icon={FiAlignLeft}
              name="descricao_motivo"
            />

            <ButtonRegister type="submit">Finalizar Cadastro</ButtonRegister>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Cadastur;
