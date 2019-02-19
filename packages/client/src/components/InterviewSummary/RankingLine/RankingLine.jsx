import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import Button from 'reactstrap/es/Button';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const RankingLine = (props) =>{
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input type="password" name="password" id="examplePassword"
                                   placeholder="pass" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button> 1 </Button>
                            <Button> 2 </Button>
                            <Button> 3 </Button>
                            <Button> 4 </Button>
                            <Button> 5 </Button>
                            <Button> 6 </Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                        Hello
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default RankingLine