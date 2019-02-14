import React, { useState } from 'react';
import {Container, Row, Col, Input, Button, Alert } from 'reactstrap';
import CatIcon from '../../../assets/cat.png';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import './Login.css';

const sendLoginData = (username ,password) => {
    //TODO change server adress
    return axios.post(`http://desktop-gb2pqr1/login`, { username, password },
    {withCredentials: true})
}

function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessages, setErrorMessages] = useState();

    const handlerChangedUsername = event => {
        setUsername(event.target.value);
    }

    const handlerChangedPassword = event => {
        setPassword(event.target.value);
    }

    const alertMessages = () => {
        sendLoginData(username,password).then((resp) => {
            if(resp.data.successful) {
                setIsLoggedIn(true);
            }
        })
        .catch(err => {
            console.log(err.response.status);
            switch(err.response.status) {
                case 400: 
                    setErrorMessages("הקלד שם משתמש קיים במערכת");
                    break;
                case 401: 
                    setErrorMessages("שם משתמש וסיסמא אינם תואמים");
                    break;
                default: 
                    setErrorMessages(err.message)
            }
        })
    }

    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    
    return (
        <div id="login-box">
            {!errorMessages=='' ? ( <Alert color="danger">{errorMessages}</Alert> ) : ''}
            <Container className="header-container">
                <Row>
                    <Col><h2>דף התחברות</h2></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faUser} style={{float: 'left', position: 'absolute', right: '30px', top: '11px', color: '#000000aa'}}/>
                        <Input type="text" placeholder="שם משתמש" value={username} onChange={handlerChangedUsername}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faLock} style={{float: 'left', position: 'absolute', right: '30px', top: '11px', color: '#000000aa'}}/>
                        <Input type="password" placeholder="סיסמא" value={password} onChange={handlerChangedPassword}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" id="login-button" onClick={() => alertMessages()}>התחבר</Button>
                    </Col>
                </Row>
            </Container>
            <p>{"Powered by Team Meow © 2019 "}<img src={CatIcon} width="26px"/></p>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
    )
}

export default LoginPage;