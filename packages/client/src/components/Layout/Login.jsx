import React, { useState } from 'react';
import {Container, Row, Col, Input, Button } from 'reactstrap';
import CatIcon from '../../assets/cat.png';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import './Login.css';

function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const passwordChangedHandler = event => {
        setPassword(event.target.value);
    }

    return (
        <div id="login-box">
            <Container>
                <Row>
                    <Col><h2>דף התחברות</h2></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faUser} style={{float: 'left', position: 'absolute', right: '30px', top: '11px', color: '#000000aa'}}/>
                        <Input type="text" placeholder="שם משתמש" value={username} onChange={usernameChangeHandler}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faLock} style={{float: 'left', position: 'absolute', right: '30px', top: '11px', color: '#000000aa'}}/>
                        <Input type="password" placeholder="סיסמא" value={password} onChange={passwordChangedHandler}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" id="login-button" onClick={() => console.log(username)}>התחבר</Button>
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