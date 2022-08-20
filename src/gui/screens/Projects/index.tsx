import React from 'react'

import { ContentContainer } from '../../components/common'
import { ContentPageContainer, InnerPageContainer, PageContainer } from '../../components/pageContainer'

const Projects = () => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>TODO Projets</h1>
          </ContentContainer>
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  )
}

export default Projects
