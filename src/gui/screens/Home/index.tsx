import React from 'react'
import styled from 'styled-components'

import { ContentContainer } from '../../components/common'
import Marginer from '../../components/marginer'
import { ContentPageContainer, InnerPageContainer, PageContainer } from '../../components/pageContainer'

const ContactContentContainer = styled(ContentContainer)`
  text-align: justify;

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`

const Contact = () => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer>
          <ContactContentContainer>
            <h2>TODO Image de fond + logo ?</h2>
          </ContactContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
        <ContentPageContainer>
          <ContactContentContainer>
            <h2>TODO Page d'accueil</h2>
          </ContactContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  )
}

export default Contact
