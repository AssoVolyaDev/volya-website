import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../../../constants'
import { ContentContainer } from '../../components/common'
import { ContentPageContainer, InnerPageContainer, PageContainer } from '../../components/pageContainer'
import CollectionSiteImg from '../../../assets/images/collectionSite.png'
import MapMarker from '../../components/Marker';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer>
          <ContentContainer>
            <h1>{t("home.title")}</h1>
            <p>
              {t("home.description")}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* TODO color: 'white' à mettre dans bootstrap.scss d'une manière ou d'une autre */}
              <Button size="lg" variant="primary" style={{ color: 'white' }} onClick={() => navigate("../association")}>{t("home.details")}</Button>
            </div>
          </ContentContainer>
        </ContentPageContainer>

        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h2>{t("home.collectionSite.title")}</h2>
            <div style={{ display: "flex", flexDirection: 'row', paddingTop: 15 }}>
              <div style={{ flex: 1 }}>
                <h3>{t("home.collectionSite.hours")}</h3>
                <img src={CollectionSiteImg}
                  width="320"
                  height="240"
                  className="d-inline-block align-top"
                  alt="Volya logo"
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{t("home.collectionSite.address")}</h3>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: Constants.GOOGLE_MAPS_API_KEY }}
                  defaultCenter={Constants.GOOGLE_MAP_DEFAULT_PROPS.center}
                  defaultZoom={Constants.GOOGLE_MAP_DEFAULT_PROPS.zoom}
                  yesIWantToUseGoogleMapApiInternals
                >
                  <MapMarker
                    lat={Constants.COLLECTION_SITE_COORDINATES.lat}
                    lng={Constants.COLLECTION_SITE_COORDINATES.lng}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </ContentContainer>
        </ContentPageContainer>

        <ContentPageContainer>
          <ContentContainer>
            <h2>{t("home.actualites.title")}</h2>
          </ContentContainer>
        </ContentPageContainer>

        <ContentPageContainer>
          <ContentContainer>
            <h2>{t("home.blog.title")}</h2>
          </ContentContainer>
        </ContentPageContainer>

        <ContentPageContainer coloredBackground="other">
          <ContentContainer>
            <h2>{t("home.calendar.title")}</h2>
          </ContentContainer>
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  )
}

export default Home
