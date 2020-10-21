import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components"

import messages from './messages';

export default function NotFound() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`;