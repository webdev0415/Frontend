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
import {confirmEmail} from "../store/action"


const EmailConfirmation = () => {

  const { token } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(confirmEmail(token, history))
  }, [history, token]);

  return (
    <>
      <Helmet>
        <title>EmailConfirmation</title>
        <meta name="description" content="Description of EmailConfirmation" />
      </Helmet>
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