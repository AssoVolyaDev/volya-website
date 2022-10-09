import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ContentContainer, StyledALink, StyledLink } from '../../components/common';
import Marginer from '../../components/marginer';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';

const LegalNoticesContentContainer = styled(ContentContainer)`
  text-align: justify;

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const LegalNotices = (): ReactElement => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Mentions Légales</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <LegalNoticesContentContainer>
            <p style={{ marginBottom: 25, textAlign: 'center' }}>En vigueur au 11/10/2022</p>
            <p>
              Conform&eacute;ment aux dispositions des Articles 6-III et 19 de la Loi n&deg;2004-575
              du 21 juin 2004 pour la Confiance dans l&rsquo;&eacute;conomie num&eacute;rique, dite
              L.C.E.N., il est port&eacute; &agrave; la connaissance des utilisateurs et visiteurs,
              ci-apr&egrave;s l&quot;&quot;<strong>Utilisateur</strong>&quot;, du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>,
              ci-apr&egrave;s le &quot;<strong>Site</strong>&quot;, les pr&eacute;sentes mentions
              l&eacute;gales.
            </p>
            <p>
              La connexion et la navigation sur le Site par l&rsquo;Utilisateur implique acceptation
              int&eacute;grale et sans r&eacute;serve des pr&eacute;sentes mentions l&eacute;gales.
            </p>
            <p>
              Ces derni&egrave;res sont accessibles sur le Site &agrave; la rubrique &laquo;
              Mentions l&eacute;gales &raquo;.
            </p>

            <h2>ARTICLE 1 - Editeur</h2>
            <p>
              Le Site est &eacute;dit&eacute; par ASSOCIATION FRANCO-UKRAINIENNE VOLYA Association
              loi de 1901, immatricul&eacute;e au R&eacute;pertoire National des Associations de
              Nantes sous le num&eacute;ro 918566043 dont le si&egrave;ge social est situ&eacute; au
              25 rue Jules Piedeleu,
            </p>

            <p>
              Adresse e-mail :{' '}
              <StyledALink href={`mailto: ukraine@volya-asso.fr`}>
                ukraine@volya-asso.fr
              </StyledALink>
              .
            </p>
            <p>Le Directeur de la publication est Anthony Labaere.</p>
            <p>
              ci-apr&egrave;s l&apos;&quot;<strong>Editeur</strong>&quot;.
            </p>

            <h2>ARTICLE 2 - Hébergeur</h2>
            <p>
              Le Site est h&eacute;berg&eacute; par la soci&eacute;t&eacute; Netlify, dont le
              si&egrave;ge social est situ&eacute; au 2325 3rd Street, Suite 215 94107 San
              Francisco, USA, pouvant &ecirc;tre contact&eacute; via le formulaire{' '}
              <StyledALink href={`https://www.netlify.com/support/`}>
                https://www.netlify.com/support/
              </StyledALink>
              .
            </p>

            <h2>ARTICLE 3 - Accès au site</h2>
            <p>
              Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure,
              interruption programm&eacute;e ou non et pouvant d&eacute;coulant d&rsquo;une
              n&eacute;cessit&eacute; de maintenance.
            </p>
            <p>
              En cas de modification, interruption ou suspension du Site, l&apos;Editeur ne saurait
              &ecirc;tre tenu responsable.
            </p>

            <h2>ARTICLE 4 - Collecte des données</h2>
            <p>
              Le Site assure &agrave; l&apos;Utilisateur une collecte et un traitement
              d&apos;informations personnelles dans le respect de la vie priv&eacute;e
              conform&eacute;ment &agrave; la loi n&deg;78-17 du 6 janvier 1978 relative &agrave;
              l&apos;informatique, aux fichiers et aux libert&eacute;s.
            </p>
            <p>
              En vertu de la loi Informatique et Libert&eacute;s, en date du 6 janvier 1978,
              l&apos;Utilisateur dispose d&apos;un droit d&apos;acc&egrave;s, de rectification, de
              suppression et d&apos;opposition de ses donn&eacute;es personnelles. Ce droit peut
              &ecirc;tre exerc&eacute; par l&apos;Utilisateur par mail &agrave; l&apos;adresse email{' '}
              <StyledALink href={`mailto: ukraine@volya-asso.fr`}>
                ukraine@volya-asso.fr
              </StyledALink>
            </p>

            <p>
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute
              ou partie du Site, sans autorisation de l&rsquo;Editeur est prohib&eacute;e et pourra
              entra&icirc;n&eacute;e des actions et poursuites judiciaires telles que notamment
              pr&eacute;vues par le Code de la propri&eacute;t&eacute; intellectuelle et le Code
              civil.
            </p>
            <p>
              Pour plus d&rsquo;informations, se reporter aux CGU du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>
              accessible &agrave; la rubrique <StyledLink to="/cgu"> &quot;CGU&quot;</StyledLink>
            </p>
            <p>
              Pour plus d&apos;informations en mati&egrave;re de protection des donn&eacute;es
              &agrave; caract&egrave;re personnel, se reporter &agrave; la Charte en mati&egrave;re
              de protection des donn&eacute;es &agrave; caract&egrave;re personnel du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>{' '}
              accessible &agrave; la rubrique{' '}
              <StyledLink to="/cgu"> &quot;Donn&eacute;es personnelles&quot;</StyledLink>
            </p>
            {/* <p>
              Pour plus d&apos;informations en mati&egrave;re de cookies, se reporter &agrave; la
              Charte en mati&egrave;re de cookies du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>{' '}
              accessible &agrave; la rubrique &quot;Cookies&quot;
            </p> */}
          </LegalNoticesContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default LegalNotices;
