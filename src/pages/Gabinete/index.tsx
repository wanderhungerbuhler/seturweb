import React, { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

// API
import { FiCreditCard, FiAlignLeft, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaRegBuilding } from 'react-icons/fa';
import api from '../../services/api';

// VALIDATION ERRORS
import getValidationErrors from '../../utils/getValidationErrors';

// ICONS

// STYLES
import { Container, ButtonRegister } from './styles';

// COMPONENTS
import InputMask from '../../components/InputMask';
import Input from '../../components/Input';
import Notifications from '../../components/Notifications';

// PAGES
import Header from '../Header';

interface FormDataProps {
  nome: string;
  data_nascimento: string;
  email: string;
  empresa: string;
  telefone: string;
  whatsapp: string;
  faloucom: string;
  endereco: string;
}

const Gabinete: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [notifications, setNotifications] = useState();

  const handleSubmit = useCallback(
    async (data: FormDataProps) => {
      const {
        nome,
        data_nascimento,
        email,
        empresa,
        telefone,
        whatsapp,
        faloucom,
        endereco,
      } = data;

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          data_nascimento: Yup.string().required('Dta. Nascimento obrigatório'),
          email: Yup.string()
            .email('Digite um E-mail válido')
            .required('E-mail obrigatório'),
          empresa: Yup.string().required('Empresa obrigatória'),
          telefone: Yup.string().optional(),
          whatsapp: Yup.string().optional(),
          faloucom: Yup.string().required('Falou com obrigatório'),
          endereco: Yup.string().optional(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/registergabinete', {
          nome,
          data_nascimento,
          email,
          empresa,
          telefone,
          whatsapp,
          faloucom,
          endereco,
        });

        setNotifications(response.status as any);

        setTimeout(() => {
          history.push('/');
        }, 2500);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <>
      {notifications && <Notifications />}
      <Header children="Registro de Comparecimento" />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <h2>Dados Pessoais</h2>
            <Input label="Nome Completo" icon={FiAlignLeft} name="nome" />
            <InputMask
              label="Dta. Nascimento"
              icon={FiCreditCard}
              mask="99/99/9999"
              name="data_nascimento"
            />
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
            <Input label="Endereço" icon={FaRegBuilding} name="endereco" />
            <Input label="Empresa" icon={FaRegBuilding} name="empresa" />
            <Input label="Falou com" icon={FiAlignLeft} name="faloucom" />

            <ButtonRegister type="submit">Finalizar Cadastro</ButtonRegister>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Gabinete;
