import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import * as Constants from '../../../constants';
import { ContentContainer } from '../../components/common';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';
import TeamMember from './TeamMember';

const Association = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>{t('association.title')}</h1>
            <h3>{t('association.role.title')}</h3>
            <p>{t('association.role.description')}</p>

            <h3>{t('association.objective.title')}</h3>
            <p>{t('association.objective.description')}</p>

            <h3>{t('association.howToAchieveIt.title')}</h3>
            <p>{t('association.howToAchieveIt.description')}</p>
          </ContentContainer>
        </ContentPageContainer>

        {Constants.TEAM_MEMBERS !== undefined && Constants.TEAM_MEMBERS.length > 0 && (
          <ContentPageContainer>
            <ContentContainer>
              <h2>{t('association.team.title')}</h2>
              {Constants.TEAM_MEMBERS.map((teamMember, index) => {
                return (
                  <TeamMember
                    key={index}
                    teamMember={teamMember}
                    position={index % 2 === 0 ? 'left' : 'right'}
                  />
                );
              })}
            </ContentContainer>
          </ContentPageContainer>
        )}

        {Constants.PARTNERS !== undefined && Constants.PARTNERS.length > 0 && (
          <ContentPageContainer>
            <ContentContainer>
              <h2>{t('association.partners.title')}</h2>
            </ContentContainer>
          </ContentPageContainer>
        )}

        {Constants.DONORS !== undefined && Constants.DONORS.length > 0 && (
          <ContentPageContainer>
            <ContentContainer>
              <h2>{t('association.donors.title')}</h2>
            </ContentContainer>
          </ContentPageContainer>
        )}

        <ContentPageContainer coloredBackground="other">
          <ContentContainer>
            <h2>{t('association.communityLife.title')}</h2>
          </ContentContainer>
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Association;
