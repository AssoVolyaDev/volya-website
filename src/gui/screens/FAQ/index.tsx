import React from 'react'
import styled from 'styled-components'

import { ContentContainer } from '../../components/common'
import Marginer from '../../components/marginer'
import { ContentPageContainer, InnerPageContainer, PageContainer } from '../../components/pageContainer'

const FAQContentContainer = styled(ContentContainer)`
  text-align: justify;

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`

const FAQ = () => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>FAQ</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <FAQContentContainer>
            <h2>TODO FAQ</h2>
          </FAQContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  )
}

export default FAQ
