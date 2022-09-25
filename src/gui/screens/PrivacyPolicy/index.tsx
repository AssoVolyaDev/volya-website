import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../components/common';
import Marginer from '../../components/marginer';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';

const PrivacyPolicyContentContainer = styled(ContentContainer)`
  text-align: justify;

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const PrivacyPolicy = (): ReactElement => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Règles de confidentialité</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <PrivacyPolicyContentContainer>
            <p>En cours de rédaction...</p>
          </PrivacyPolicyContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default PrivacyPolicy;
