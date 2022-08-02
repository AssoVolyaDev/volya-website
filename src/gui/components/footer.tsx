import React from 'react'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { DEVICE_SIZES, SOCIAL_NETWORKS_URLS } from '../../constants';
import { StyledLink } from '../components/common';
import Brand from './brand'
import Marginer from './marginer'

const GREY_COLOR = '#353535'
const GREY_HOVER_COLOR = '#666666'

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    padding: 2rem 0.75rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXS}) {
    padding: 2rem 0.5rem;
  }

  padding-bottom: 0;
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const TopContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.laptop};
`

const ContentContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    flex-direction: column;
  }
`

const BottomContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    padding: 0;
  }
`

const TopSubContainer = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: justify;
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialIcon = styled.div`
  color: ${GREY_COLOR};
  font-size: 45px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:hover {
    color: ${GREY_HOVER_COLOR};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    font-size: 25px;
  }
`

const BottomSubContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BottomSubContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PrivacyText = styled.div`
  color: ${GREY_COLOR};
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  display: inline;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    font-size: 0.5rem;
  }
`

const BottomStyledLink = styled(StyledLink)`
  color: ${GREY_COLOR};
  font-size: 1.25rem;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${GREY_HOVER_COLOR};
  }
`

const Footer = () => {
  const isMobileXS = useMediaQuery({ maxWidth: DEVICE_SIZES.mobileXS })
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobileXL })

  let marginerMargin: number
  if (isMobileXS) {
    marginerMargin = 5
  } else if (isMobile) {
    marginerMargin = 7.5
  } else {
    marginerMargin = 10
  }

  return (
    <FooterContainer>
      <TopContainer>
        <TopContentContainer>
          <ContentContainer>
            <TopSubContainer>
              <Title>À propos</Title>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </TopSubContainer>
            <TopSubContainer>
              <Title>Lorem ipsum</Title>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </TopSubContainer>
          </ContentContainer>
          <ContentContainer>
            <TopSubContainer>
              <Title>Suivez-nous sur les réseaux sociaux :</Title>
              <SocialIconContainer>
                <a href={SOCIAL_NETWORKS_URLS.facebook} title="Facebook">
                  <SocialIcon>
                    <FontAwesomeIcon icon={faFacebook} />
                  </SocialIcon>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href={SOCIAL_NETWORKS_URLS.twitter} title="Twitter">
                  <SocialIcon>
                    <FontAwesomeIcon icon={faTwitter} />
                  </SocialIcon>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href={SOCIAL_NETWORKS_URLS.linkedin} title="Linkedin">
                  <SocialIcon>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </SocialIcon>
                  <span className="sr-only">Linkedin</span>
                </a>
                <a href={SOCIAL_NETWORKS_URLS.instagram} title="Instagram">
                  <SocialIcon>
                    <FontAwesomeIcon icon={faInstagram} />
                  </SocialIcon>
                  <span className="sr-only">Instagram</span>
                </a>
              </SocialIconContainer>
            </TopSubContainer>
          </ContentContainer>
          {/* <Marginer direction="vertical" margin={25} />
          <ContentContainer>
            <TopSubContainer>
              <BottomStyledLink to="/ils-parlent-de-nous">Ils parlent de nous.</BottomStyledLink>
            </TopSubContainer>
          </ContentContainer> */}
          <Marginer direction="vertical" margin={25} />
          <ContentContainer>
            <TopSubContainer>
              <BottomStyledLink to="/contact">Nous contacter</BottomStyledLink>
            </TopSubContainer>
          </ContentContainer>
        </TopContentContainer>
      </TopContainer>

      <BottomContainer>
        <BottomSubContainerColumn>
          <Link to="/">
            <Brand size={isMobile ? 1 : 1.5} color={GREY_COLOR} hoverColor={GREY_HOVER_COLOR} />
          </Link>
          {/* <Marginer direction="horizontal" margin={marginerMargin} /> */}
          <PrivacyText>TODO Association 2022</PrivacyText>
        </BottomSubContainerColumn>

        <BottomSubContainerRow>
          <BottomStyledLink to="/mentions-legales">Mentions légales</BottomStyledLink>
          <Marginer direction="horizontal" margin={marginerMargin} />
          <BottomStyledLink to="/cgu">{isMobile ? 'CGU' : "Condition générales d'utilisation"}</BottomStyledLink>
          {/* <Marginer direction="horizontal" margin={marginerMargin} />
          <BottomStyledLink to="/confidentialite">{isMobile ? 'Confidentialité' : 'Politique de confidentialité'}</BottomStyledLink> */}
        </BottomSubContainerRow>
      </BottomContainer>
    </FooterContainer>
  )
}

export default Footer
