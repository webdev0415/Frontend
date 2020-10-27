/**
 *
 * EmailConfirmation
 *
 */

import React, {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import axios from "axios"
import {message} from "antd"
import {SERVER_PORT} from "../store/config"
import { Card, Typography } from 'antd';

const EmailConfirmation = () => {
  const [loadable, setLoadable] = React.useState(true)
  const [success, setSuccess] = React.useState(false)
  const [failure, setFailure] = React.useState(false)
  const { code } = useParams();
  const history = useHistory();
  const { Title } = Typography;

  useEffect(() => {
    axios
    .get(`${SERVER_PORT}/api/account/confirm/${code}`)
    .then(res=> {
        if (res.status === 200) {
            if (res.data.reply === "success") {
                message.success("Email is confirmed. Please login.")
                setLoadable(false)
                setSuccess(true)
            } else if (res.data.reply === "user not verified") {
                message.error("User not verified")
                setLoadable(false)
                setFailure(true)
            }
        } else {
            message.error("Unknown Error")
            setLoadable(false)
            setFailure(true)
        }
    })
    .catch(err=>{
        message.error(err.message)
        message.error('Please try again.');
        setLoadable(false)
        setFailure(true)
    })
  },[code, history]);
  React.useEffect(()=>{
    setTimeout(() => { 
        history.push('/login');
       }, 8000)
    }, [])
  return (
    <>
      <Div>
        {loadable && <Spin size="large" />}
        {
          success && 
          <Card style={{ width: 500, height: 300, padding: 30 }}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Title level={3} type="success">
              Thanks for your Email Verification.
            </Title>
            <br />
            <Typography.Paragraph
              type="secondary"
              style={{ textAlign: 'justify' }}
            >
              Your email is confimed successfully. You can login with this email.
              Please wait for a few seconds to login.
            </Typography.Paragraph>
          </div>
        </Card>
        }
        {
          failure && 
          <Card style={{ width: 500, height: 300, padding: 30 }}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Title level={3} type="danger">
              Email Verification Failure.
            </Title>
            <br />
            <Typography.Paragraph
              type="secondary"
              style={{ textAlign: 'justify' }}
            >
              Your email is not verified unfortunately. Please make sure the confimation link or network connection. 
              Retry again
            </Typography.Paragraph>
          </div>
        </Card>
        }
      </Div>
    </>
  )
};

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default EmailConfirmation;