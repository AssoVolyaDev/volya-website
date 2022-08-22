import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import * as Constants from '../../constants';
import { StyledLink } from '../components/common';
import Marginer from './marginer';

const GREY_COLOR = '#353535';
const GREY_HOVER_COLOR = '#666666';

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.backgroundColor};

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    padding: 2rem 0.75rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXS}) {
    padding: 2rem 0.5rem;
  }

  padding-bottom: 0;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const TopContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.laptop};
`;

const ContentContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    flex-direction: column;
  }
`;

const BottomContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 70px;
  padding: 0 10px;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    padding: 0;
  }
`;

const TopSubContainer = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: justify;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 25px;
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: inline-block;
  }
`;

const SocialIcon = styled.div`
  color: ${GREY_COLOR};
  font-size: 30px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:hover {
    color: ${GREY_HOVER_COLOR};
  }
`;

const BottomStyledLink = styled(StyledLink)`
  color: ${GREY_COLOR};
  font-size: 1.25rem;

  &:hover {
    color: ${GREY_HOVER_COLOR};
  }
`;

const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <TopContainer>
        <TopContentContainer>
          <ContentContainer>
            <TopSubContainer>
              <Title>
                {t('footer.iNeedHelp')} | {t('footer.iWantToHelp')}
              </Title>
              <h2>{t('footer.contact')}</h2>
              <p>
                {t('footer.phone')} : {t('global.contact.phone')}
              </p>
              <p>
                {t('footer.email')} : {t('global.contact.email')}
              </p>
              <p>
                {t('footer.address')} : {t('global.contact.address')}
              </p>
            </TopSubContainer>
            <TopSubContainer style={{ alignItems: 'flex-end' }}>
              <SocialIconContainer>
                <span>
                  <a href={Constants.SOCIAL_NETWORKS_URLS.instagram} title="Instagram">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                    <span className="sr-only">{t('footer.socialNetworks.instagram')}</span>
                  </a>
                  <span>{Constants.SOCIAL_NETWORKS_URLS.instagram}</span>
                </span>

                <span>
                  <a href={Constants.SOCIAL_NETWORKS_URLS.facebook} title="Facebook">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <span className="sr-only">{t('footer.socialNetworks.facebook')}</span>
                  </a>
                  <span>{Constants.SOCIAL_NETWORKS_URLS.facebook}</span>
                </span>

                <span>
                  <a href={Constants.SOCIAL_NETWORKS_URLS.youtube} title="Youtube">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faYoutube} />
                    </SocialIcon>
                    <span className="sr-only">{t('footer.socialNetworks.youtube')}</span>
                  </a>
                  <span>{Constants.SOCIAL_NETWORKS_URLS.youtube}</span>
                </span>

                <span>
                  <a href={Constants.SOCIAL_NETWORKS_URLS.linkedin} title="Linkedin">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </SocialIcon>
                    <span className="sr-only">{t('footer.socialNetworks.linkedin')}</span>
                  </a>
                  <span>{Constants.SOCIAL_NETWORKS_URLS.linkedin}</span>
                </span>

                <span>
                  <a href={Constants.SOCIAL_NETWORKS_URLS.tiktok} title="Tiktok">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faTiktok} />
                    </SocialIcon>
                    <span className="sr-only">{t('footer.socialNetworks.tiktok')}</span>
                  </a>
                  <span>{Constants.SOCIAL_NETWORKS_URLS.tiktok}</span>
                </span>
              </SocialIconContainer>
            </TopSubContainer>
          </ContentContainer>
        </TopContentContainer>
      </TopContainer>

      <BottomContainer>
        <BottomStyledLink to="/cgu">{t('footer.gcu')}</BottomStyledLink>
        <Marginer direction="horizontal" margin={15} />
        <BottomStyledLink to="/mentions-legales">{t('footer.legalNotices')}</BottomStyledLink>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
