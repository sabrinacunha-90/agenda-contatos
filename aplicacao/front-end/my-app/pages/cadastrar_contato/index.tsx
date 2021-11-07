import React, { useState } from 'react';
import axios from '../../utils/axios';
import { Layout, Row, Col, Card, Form, Input, Button, Divider } from 'antd';

import "antd/dist/antd.css";

export default function CadastrarContato() {

    const [nome, setNome] = useState("");
    const [telefone1, setTelefone1] = useState("");
    const [telefone2, setTelefone2] = useState("");
    const [email, setEmail] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");

    const cadastrar = () => {
        const telefone = [telefone1, telefone2];
        const endereco = {rua, numero, bairro, cep};
        axios.post("/classes/Contato", {
            nome,
            telefone,
            email,
            endereco
        }).then(reponse => {
            console.log('Cadastro realizado!');
        }).catch((e) =>{
            console.log("Erro!!!" + [nome, telefone1, telefone2, email, rua, numero, bairro, cep]);
        });
    }

    return (
        <Layout>
                <Form  
                    labelCol={{span: 4}} 
                    wrapperCol={{span: 18}} onFinish={cadastrar} 
                    align="center">
                <Row gutter={16}>
                <Col span={8}>
                    <Card>
                    <h2>Dados Básicos</h2>
                    <Form.Item>
                    <Form.Item
                        name="nome"
                        label="Nome"    
                    >
                    <Input value={nome} onChange={(input) => setNome(input.target.defaultValue) } />
                    </Form.Item>
                    <Row gutter={8}>
                    <Col span={8}>
                    <Form.Item 
                        name="telefone1"
                        label="Telefone 1"
                    >
                    <Input value={telefone1} onChange={(input) => setTelefone1(input.target.defaultValue) }/>
                    </Form.Item>
                    </Col>
                    <Col span={8}>
                    <Form.Item
                        name="telefone2"
                        label="Telefone 2"
                    >
                    <Input value={telefone2} onChange={(input) => setTelefone2(input.target.defaultValue) }/>
                    </Form.Item>
                    </Col>
                    </Row>
                    <Form.Item
                        name="email"
                        label="E-mail"
                    >
                    <Input value={email} onChange={(input) => setEmail(input.target.defaultValue) }/>
                    </Form.Item>
                    </Form.Item>
                    </Card>
                    </Col>
                    <Col span={8}>
                    <Card>
                        <h2>Endereço</h2>
                        <Form.Item>
                        <Form.Item
                            name="rua"
                            label="Rua"
                        >
                        <Input value={rua} onChange={(input) => setRua(input.target.defaultValue) }/>
                        </Form.Item>
                        <Form.Item
                            name="numero"
                            label="Número"
                        >
                        <Input value={numero} onChange={(input) => setNumero(input.target.defaultValue) }/>
                        </Form.Item>
                        <Form.Item
                            name="bairro"
                            label="Bairro"
                        >
                        <Input value={bairro} onChange={(input) => setBairro(input.target.defaultValue) }/>
                        </Form.Item>
                        <Form.Item
                            name="cep"
                            label="CEP"
                        >
                        <Input value={cep} onChange={(input) => setCep(input.target.defaultValue) }/>
                        </Form.Item>
                        </Form.Item>
                    </Card>
                    </Col>  
                </Row>
                <Divider>
                <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Cadastrar
                        </Button>
                </Form.Item>  
                </Divider>
                </Form>
        </Layout>
    );
}