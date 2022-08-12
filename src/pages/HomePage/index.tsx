import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Input from 'components/input';
import React, { useState } from 'react';

export const Form = () => {
  interface Oportunidades {
    ID: string;
    Pilar: string;
    Vertical: string;
    Empresas: string;
    NomeEmpresa: string;
    Oportunidades: string;
    Account_Manager: string;
    Provedor: string;
    Entrada: string;
    Entrega: string;
    Prevendas: string;
    Esforco_prevendas: string;
    Custo_prevendas: string;
    Descricao_Necessidade: string;
    Quarter_de_Fechamento: string;
    Status: string;
    Probabilidade: string;
    Custo_Hospedagem: string;
    Data_fechamento: string;
    Tempo_contrato: string;
    Valor_Mensal: string;
    Valor_periodo: string;
    Valor_unico: string;
    Valor_total_estimado: string;
  }
  const formData: Oportunidades = {
    ID: '',
    Pilar: '',
    Vertical: '',
    Empresas: '',
    NomeEmpresa: '',
    Oportunidades: '',
    Account_Manager: '',
    Provedor: '',
    Entrada: '',
    Entrega: '',
    Prevendas: '',
    Esforco_prevendas: '',
    Custo_prevendas: '',
    Descricao_Necessidade: '',
    Quarter_de_Fechamento: '',
    Status: '',
    Probabilidade: '',
    Custo_Hospedagem: '',
    Data_fechamento: '',
    Tempo_contrato: '',
    Valor_Mensal: '',
    Valor_periodo: '',
    Valor_unico: '',
    Valor_total_estimado: '',
  };

  const [responseBody, setResponseBody] = useState<Oportunidades>(formData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.defaults.baseURL = 'http://localhost:8000';
    await axios.post('/items', responseBody).then((res) => {
      console.log(`[POST] ${res.status} ${res.statusText}`);
    });
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {Object.keys(formData).map((key: string) => {
          return (
            <Input
              name={key}
              onChange={inputChangeHandler}
              placeholder={key}
              key={key}
              id={key}
            />
          );
        })}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
