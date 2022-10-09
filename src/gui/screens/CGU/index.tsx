import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ContentContainer, StyledALink, StyledLink } from '../../components/common';
import Marginer from '../../components/marginer';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';

const CGUContentContainer = styled(ContentContainer)`
  text-align: justify;

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const CGU = (): ReactElement => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Conditions g&eacute;n&eacute;rales d&apos;utilisation</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <CGUContentContainer>
            <p style={{ marginBottom: 25, textAlign: 'center' }}>En vigueur au 11/10/2022</p>

            <p>
              Les pr&eacute;sentes conditions g&eacute;n&eacute;rales d&apos;utilisation (dites
              &laquo; <strong>CGU</strong> &raquo;) ont pour objet l&apos;encadrement juridique des
              modalit&eacute;s de mise &agrave; disposition du site et des services par ASSOCIATION
              FRANCO-UKRAINIENNE VOLYA et de d&eacute;finir les conditions d&rsquo;acc&egrave;s et
              d&rsquo;utilisation des services par &laquo; <strong>l&apos;Utilisateur</strong>{' '}
              &raquo;.
            </p>
            <p>
              Les pr&eacute;sentes CGU sont accessibles sur le site &agrave; la rubrique{' '}
              <StyledLink to="/cgu">
                &laquo;<strong>CGU</strong>&raquo;
              </StyledLink>
              .
            </p>

            <h2>ARTICLE 1 : Acc&egrave;s au site</h2>

            <p>
              Le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>{' '}
              &nbsp;permet &agrave; l&apos;Utilisateur un acc&egrave;s gratuit aux services suivants
              :
            </p>
            <p>Le site internet propose les services suivants :</p>
            <ul>
              <li>Informations sur les activit&eacute;s de l&apos;association</li>
              <li>Pr&eacute;sentation de l&apos;&eacute;quipe</li>
              <li>Mise en contact avec l&apos;association</li>
            </ul>
            <p>
              Le site est accessible gratuitement en tout lieu &agrave; tout Utilisateur ayant un
              acc&egrave;s &agrave; Internet. Tous les frais support&eacute;s par l&apos;Utilisateur
              pour acc&eacute;der au service (mat&eacute;riel informatique, logiciels, connexion
              Internet, etc.) sont &agrave; sa charge.
            </p>

            <h2>ARTICLE 2 : Collecte des donn&eacute;es</h2>

            <p>
              Le site assure &agrave; l&apos;Utilisateur une collecte et un traitement
              d&apos;informations personnelles dans le respect de la vie priv&eacute;e
              conform&eacute;ment &agrave; la loi n&deg;78-17 du 6 janvier 1978 relative &agrave;
              l&apos;informatique, aux fichiers et aux libert&eacute;s.
            </p>
            <p>
              En vertu de la loi Informatique et Libert&eacute;s, en date du 6 janvier 1978,
              l&apos;Utilisateur dispose d&apos;un droit d&apos;acc&egrave;s, de rectification, de
              suppression et d&apos;opposition de ses donn&eacute;es personnelles.
              L&apos;Utilisateur exerce ce droit par mail &agrave; l&apos;adresse email{' '}
              <StyledALink href={`mailto: ukraine@volya-asso.fr`}>
                ukraine@volya-asso.fr
              </StyledALink>
            </p>

            <h2>ARTICLE 3 : Propri&eacute;t&eacute; intellectuelle</h2>

            <p>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images,
              son&hellip;) font l&apos;objet d&apos;une protection par le Code de la
              propri&eacute;t&eacute; intellectuelle et plus particuli&egrave;rement par le droit
              d&apos;auteur.
            </p>

            <p>
              L&apos;Utilisateur doit solliciter l&apos;autorisation pr&eacute;alable du site pour
              toute reproduction, publication, copie des diff&eacute;rents contenus. Il
              s&apos;engage &agrave; une utilisation des contenus du site dans un cadre strictement
              priv&eacute;, toute utilisation &agrave; des fins commerciales et publicitaires est
              strictement interdite.
            </p>
            <p>
              Toute repr&eacute;sentation totale ou partielle de ce site par quelque
              proc&eacute;d&eacute; que ce soit, sans l&rsquo;autorisation expresse de
              l&rsquo;exploitant du site Internet constituerait une contrefa&ccedil;on
              sanctionn&eacute;e par l&rsquo;article L 335-2 et suivants du Code de la
              propri&eacute;t&eacute; intellectuelle.
            </p>
            <p>
              Il est rappel&eacute; conform&eacute;ment &agrave; l&rsquo;article L122-5 du Code de
              propri&eacute;t&eacute; intellectuelle que l&rsquo;Utilisateur qui reproduit, copie ou
              publie le contenu prot&eacute;g&eacute; doit citer l&rsquo;auteur et sa source.
            </p>

            <h2>ARTICLE 4 : Responsabilit&eacute;</h2>

            <p>
              Les sources des informations diffus&eacute;es sur le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>
              sont r&eacute;put&eacute;es fiables mais le site ne garantit pas qu&rsquo;il soit
              exempt de d&eacute;fauts, d&rsquo;erreurs ou d&rsquo;omissions.
            </p>
            <p>
              Les informations communiqu&eacute;es sont pr&eacute;sent&eacute;es &agrave; titre
              indicatif et g&eacute;n&eacute;ral sans valeur contractuelle. Malgr&eacute; des mises
              &agrave; jour r&eacute;guli&egrave;res, le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink> ne
              peut &ecirc;tre tenu responsable de la modification des dispositions administratives
              et juridiques survenant apr&egrave;s la publication. De m&ecirc;me, le site ne peut
              &ecirc;tre tenue responsable de l&rsquo;utilisation et de
              l&rsquo;interpr&eacute;tation de l&rsquo;information contenue dans ce site.
            </p>
            <p>
              Le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink> ne
              peut &ecirc;tre tenu pour responsable d&rsquo;&eacute;ventuels virus qui pourraient
              infecter l&rsquo;ordinateur ou tout mat&eacute;riel informatique de
              l&rsquo;Internaute, suite &agrave; une utilisation, &agrave; l&rsquo;acc&egrave;s, ou
              au t&eacute;l&eacute;chargement provenant de ce site.
            </p>
            <p>
              La responsabilit&eacute; du site ne peut &ecirc;tre engag&eacute;e en cas de force
              majeure ou du fait impr&eacute;visible et insurmontable d&apos;un tiers.
            </p>

            <h2>ARTICLE 5 : Liens hypertextes</h2>

            <p>
              Des liens hypertextes peuvent &ecirc;tre pr&eacute;sents sur le site.
              L&rsquo;Utilisateur est inform&eacute; qu&rsquo;en cliquant sur ces liens, il sortira
              du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>. Ce
              dernier n&rsquo;a pas de contr&ocirc;le sur les pages web sur lesquelles aboutissent
              ces liens et ne saurait, en aucun cas, &ecirc;tre responsable de leur contenu.
            </p>

            <h2>ARTICLE 6 : Cookies</h2>

            <p>
              L&rsquo;Utilisateur est inform&eacute; que lors de ses visites sur le site, un cookie
              peut s&rsquo;installer automatiquement sur son logiciel de navigation.
            </p>
            <p>
              Les cookies sont de petits fichiers stock&eacute;s temporairement sur le disque dur de
              l&rsquo;ordinateur de l&rsquo;Utilisateur par votre navigateur et qui sont
              n&eacute;cessaires &agrave; l&rsquo;utilisation du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>. Les
              cookies ne contiennent pas d&rsquo;information personnelle et ne peuvent pas
              &ecirc;tre utilis&eacute;s pour identifier quelqu&rsquo;un. Un cookie contient un
              identifiant unique, g&eacute;n&eacute;r&eacute; al&eacute;atoirement et donc anonyme.
              Certains cookies expirent &agrave; la fin de la visite de l&rsquo;Utilisateur,
              d&rsquo;autres restent.
            </p>
            <p>
              L&rsquo;information contenue dans les cookies est utilis&eacute;e pour
              am&eacute;liorer le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>.
            </p>
            <p>En naviguant sur le site, L&rsquo;Utilisateur les accepte.</p>
            <p>
              L&rsquo;Utilisateur doit toutefois donner son consentement quant &agrave;
              l&rsquo;utilisation de certains cookies.
            </p>
            <p>
              A d&eacute;faut d&rsquo;acceptation, l&rsquo;Utilisateur est inform&eacute; que
              certaines fonctionnalit&eacute;s ou pages risquent de lui &ecirc;tre refus&eacute;es.
            </p>
            <p>
              L&rsquo;Utilisateur pourra d&eacute;sactiver ces cookies par
              l&rsquo;interm&eacute;diaire des param&egrave;tres figurant au sein de son logiciel de
              navigation.
            </p>

            <h2>ARTICLE 7 : Droit applicable et juridiction comp&eacute;tente</h2>

            <p>
              La l&eacute;gislation fran&ccedil;aise s&apos;applique au pr&eacute;sent contrat. En
              cas d&apos;absence de r&eacute;solution amiable d&apos;un litige n&eacute; entre les
              parties, les tribunaux fran&ccedil;ais seront seuls comp&eacute;tents pour en
              conna&icirc;tre.
            </p>
            <p>
              Pour toute question relative &agrave; l&rsquo;application des pr&eacute;sentes CGU,
              vous pouvez joindre l&rsquo;&eacute;diteur aux coordonn&eacute;es inscrites &agrave;
              la rubrique{' '}
              <StyledLink to="/mentions-legales">
                &laquo;<strong>Mentions L&eacute;gales</strong>&raquo;
              </StyledLink>
              .
            </p>
          </CGUContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default CGU;
