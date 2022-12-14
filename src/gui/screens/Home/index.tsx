import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
// import GoogleMapReact from 'google-map-react';
// import styled from 'styled-components';

// import * as Constants from '../../../constants';
import { ContentContainer } from '../../components/common';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';
// import CollectionSiteImg from '../../../assets/images/collection-site.png';
// import MapMarker from '../../components/Marker';

// const SlavaText = styled.div`
//   color: ${({ theme }) => theme.redColor};
// `;

const Home = (): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer>
          <ContentContainer>
            <h1>{t('home.title')}</h1>
            <div style={{ textAlign: 'center' }}>
              <span>{t('home.description.0')}</span>
              <span style={{ fontWeight: 'bold' }}>{t('home.description.1')}</span>
              <span>{t('home.description.2')}</span>
              <div style={{ fontWeight: 'bold' }}>
                <p>{t('home.description.3')}</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* TODO color: 'white' à mettre dans bootstrap.scss d'une manière ou d'une autre */}
              <Button
                size="lg"
                variant="primary"
                style={{ color: 'white' }}
                onClick={() => navigate('../association')}>
                {t('home.details')}
              </Button>
            </div>
          </ContentContainer>
        </ContentPageContainer>

        {/* <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h2>{t('home.collectionSite.title')}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 15 }}>
              <div style={{ flex: 1 }}>
                <h3>{t('home.collectionSite.hours')}</h3>
                <div>{t('global.collectionSite.hours')}</div>
                <img
                  src={CollectionSiteImg}
                  width="320"
                  height="240"
                  className="d-inline-block align-top"
                  alt="Volya logo"
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{t('home.collectionSite.address')}</h3>
                <div>{t('global.collectionSite.address')}</div>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: Constants.GOOGLE_MAPS_API_KEY }}
                  defaultCenter={Constants.GOOGLE_MAP_DEFAULT_PROPS.center}
                  defaultZoom={Constants.GOOGLE_MAP_DEFAULT_PROPS.zoom}
                  yesIWantToUseGoogleMapApiInternals>
                  <MapMarker
                    lat={Constants.COLLECTION_SITE_COORDINATES.lat}
                    lng={Constants.COLLECTION_SITE_COORDINATES.lng}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </ContentContainer>
        </ContentPageContainer> */}

        {/* <ContentPageContainer>
          <ContentContainer>
            <h2>{t('home.actualites.title')}</h2>
          </ContentContainer>
        </ContentPageContainer> */}

        {/* <ContentPageContainer>
          <ContentContainer>
            <h2>{t('home.blog.title')}</h2>
          </ContentContainer>
        </ContentPageContainer> */}

        {/* <ContentPageContainer coloredBackground="other">
          <ContentContainer>
            <h2>{t('home.calendar.title')}</h2>
            TODO Pour ajouter le calendrier https://bestofreactjs.com/repo/ericz1803-react-google-calendar-react-date-time-picker
          </ContentContainer>
        </ContentPageContainer> */}
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Home;
