import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Card, Typography } from 'antd';
// import {checkEmail} from "../store/action"

const CheckEmailView = () => {


  // const dispatch = useDispatch();
  const { Title } = Typography;
  // React.useEffect(()=>{
  //   dispatch(checkEmail)
  // }, [])
  return (
    <>
      
      <Div>
        <Card style={{ width: 500, height: 300, padding: 30 }}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Title level={3} type="success">
              Email was sent
            </Title>
            <br />
            <Typography.Paragraph
              type="secondary"
              style={{ textAlign: 'justify' }}
            >
              An confirmation link is sent to you email address. Please open
              your inbox and click on the confirmation link, if you're unable to
              find the confirmation email then please check the spam section.
              Try to refresh the inbox and wait for few minutes otherwise
              contact our support team.
            </Typography.Paragraph>
          </div>
        </Card>
      </Div>
    </>
  )
};

const Div = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CheckEmailView;
