import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as TeamMemberFirestore from '../../../firebase/firestore/teamMembersFirestore';

import * as Types from '../../../types';
import * as Constants from '../../../constants';
import { ContentContainer } from '../../components/common';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';
import TeamMember from './TeamMember';

import RoleImg from '../../../assets/images/role.png';
import ObjectiveImg from '../../../assets/images/objective.png';
import HowToAchieveItImg from '../../../assets/images/howToAchieveIt.png';

type TextInformationPosition = 'left' | 'right';

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;
`;

const InformationTextSubContainer = styled.div<{ position: TextInformationPosition }>`
  display: flex;
  flex-direction: column;
  // TODO : à rendre responsive et surtout à retirer sur mobile
  ${({ position }) => position === 'left' && 'margin-left: 30px;margin-right: 500px'};
  ${({ position }) => position === 'right' && 'margin-left: 500px;margin-right:30px'};
`;

const Association = (): ReactElement => {
  const { t } = useTranslation();

  // TODO : à utiliser à la place de Constants.TEAM_MEMBERS
  const [teamMembers, setTeamMembers] = useState<Types.TeamMember[]>([]);
  useEffect(() => {
    TeamMemberFirestore.subscribeToTeamMembers(setTeamMembers);
  }, []);

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>{t('association.title')}</h1>

            <InformationContainer>
              <img
                src={RoleImg}
                width="150"
                height="150"
                className="d-inline-block align-top"
                alt="role icon"
              />
              <InformationTextSubContainer position="left">
                <h3>{t('association.role.title')}</h3>
                <p>{t('association.role.description')}</p>
              </InformationTextSubContainer>
            </InformationContainer>

            <InformationContainer>
              <InformationTextSubContainer position="right">
                <h3>{t('association.objective.title')}</h3>
                <p>{t('association.objective.description')}</p>
              </InformationTextSubContainer>
              <img
                src={ObjectiveImg}
                width="150"
                height="150"
                className="d-inline-block align-top"
                alt="objective icon"
              />
            </InformationContainer>

            <InformationContainer>
              <img
                src={HowToAchieveItImg}
                width="150"
                height="150"
                className="d-inline-block align-top"
                alt="how to achieve it icon"
              />
              <InformationTextSubContainer position="left">
                <h3>{t('association.howToAchieveIt.title')}</h3>
                <p>{t('association.howToAchieveIt.description')}</p>
              </InformationTextSubContainer>
            </InformationContainer>
          </ContentContainer>
        </ContentPageContainer>

        {teamMembers !== undefined && teamMembers.length > 0 && (
          <ContentPageContainer>
            <ContentContainer>
              <h2>{t('association.team.title')}</h2>
              {teamMembers
                .sort((teamMember: Types.TeamMember, otherTeamMember: Types.TeamMember) => {
                  return teamMember.ordre - otherTeamMember.ordre;
                })
                .map((teamMember, index) => {
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
              <p>{t('association.donors.thanks')}</p>
              <p style={{ fontStyle: 'italic' }}>{t('association.donors.quote')}</p>
              <p style={{ fontStyle: 'italic' }}>{t('association.donors.author')}</p>
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
