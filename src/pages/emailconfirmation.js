/**
 *
 * EmailConfirmation
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { Spin, Space } from 'antd';
import {Link} from 'react-router-dom'
import {confirmEmail} from "../store/action"
import axios from "axios"
import {message} from "antd"
import {SERVER_PORT} from "../store/config"

const EmailConfirmation = () => {
  const [loadable, setLoadable] = React.useState(true)
  const { code } = useParams();
  console.log("token", code)
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
    .get(`${SERVER_PORT}/api/account/confirm/${code}`)
    .then(res=> {
        if (res.status === 200) {
            if (res.data.reply === "success") {
                message.success("Email is confirmed. Please login.")
            } else if (res.data.reply === "user not verified") {
                message.error("User not verified")
            }
        } else {
            message.error("Unknown Error")
        }
        history.push("/login")
    })
    .catch(err=>{
        history.push("/login")
        message.error(err.message)
        message.error('Please try again.');
        
    })
  },[code, history]);

  return (
    <>
      <Div>
        <Spin size="large" />
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