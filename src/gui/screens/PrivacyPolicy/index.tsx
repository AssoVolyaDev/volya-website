import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ContentContainer, StyledALink, StyledLink } from '../../components/common';
import Marginer from '../../components/marginer';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';

const PrivacyPolicyContentContainer = styled(ContentContainer)`
  text-align: justify;

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const PrivacyPolicy = (): ReactElement => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Règles de confidentialité</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <PrivacyPolicyContentContainer>
            <p style={{ marginBottom: 25, textAlign: 'center' }}>En vigueur au 11/10/2022</p>

            <h2>ARTICLE 1 : Pr&eacute;ambule &nbsp;</h2>
            <p>
              La pr&eacute;sente politique de confidentialit&eacute; a pour but d&rsquo;informer les
              utilisateurs du site : &nbsp;
            </p>
            <ul>
              <li>
                <span>
                  Sur la mani&egrave;re dont sont collect&eacute;es leurs donn&eacute;es
                  personnelles. Sont consid&eacute;r&eacute;es comme des donn&eacute;es
                  personnelles, toute information permettant d&rsquo;identifier un utilisateur. A ce
                  titre, il peut s&rsquo;agir : de ses noms et pr&eacute;noms, de son &acirc;ge, de
                  son adresse postale ou email, de sa localisation ou encore de son adresse IP
                  (liste non-exhaustive) ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Sur les droits dont ils disposent concernant ces donn&eacute;es ; &nbsp;
                </span>
              </li>
              <li>
                <span>
                  Sur la personne responsable du traitement des donn&eacute;es &agrave;
                  caract&egrave;re personnel collect&eacute;es et trait&eacute;es ; &nbsp;
                </span>
              </li>
              <li>
                <span>Sur les destinataires de ces donn&eacute;es personnelles ; &nbsp;</span>
              </li>
              <li>
                <span>Sur la politique du site en mati&egrave;re de cookies. &nbsp;</span>
              </li>
            </ul>
            <p>
              Cette politique compl&egrave;te les{' '}
              <StyledLink to="/mentions-legales">Mentions L&eacute;gales</StyledLink> et les{' '}
              <StyledLink to="/cgu">
                Conditions G&eacute;n&eacute;rales d&rsquo;Utilisation
              </StyledLink>{' '}
              consultables par les utilisateurs &agrave; l&rsquo;adresse suivante : &nbsp;
            </p>

            <h2>
              ARTICLE 2 : Principes relatifs &agrave; la collecte et au traitement des
              donn&eacute;es personnelles &nbsp;&nbsp;
            </h2>
            <p>
              Conform&eacute;ment &agrave; l&rsquo;article 5 du R&egrave;glement europ&eacute;en
              2016/679, les donn&eacute;es &agrave; caract&egrave;re personnel sont : &nbsp;&nbsp;
            </p>
            <ul>
              <li>
                <span>
                  Trait&eacute;es de mani&egrave;re licite, loyale et transparente au regard de la
                  personne concern&eacute;e ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Collect&eacute;es pour des finalit&eacute;s d&eacute;termin&eacute;es (cf. Article
                  3.1 des pr&eacute;sentes), explicites et l&eacute;gitimes, et ne pas &ecirc;tre
                  trait&eacute;es ult&eacute;rieurement d&apos;une mani&egrave;re incompatible avec
                  ces finalit&eacute;s ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Ad&eacute;quates, pertinentes et limit&eacute;es &agrave; ce qui est
                  n&eacute;cessaire au regard des finalit&eacute;s pour lesquelles elles sont
                  trait&eacute;es ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Exactes et, si n&eacute;cessaire, tenues &agrave; jour. Toutes les mesures
                  raisonnables doivent &ecirc;tre prises pour que les donn&eacute;es &agrave;
                  caract&egrave;re personnel qui sont inexactes, eu &eacute;gard aux
                  finalit&eacute;s pour lesquelles elles sont trait&eacute;es, soient
                  effac&eacute;es ou rectifi&eacute;es sans tarder ; &nbsp;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Conserv&eacute;es sous une forme permettant l&apos;identification des personnes
                  concern&eacute;es pendant une dur&eacute;e n&apos;exc&eacute;dant pas celle
                  n&eacute;cessaire au regard des finalit&eacute;s pour lesquelles elles sont
                  trait&eacute;es ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Trait&eacute;es de fa&ccedil;on &agrave; garantir une s&eacute;curit&eacute;
                  appropri&eacute;e des donn&eacute;es collect&eacute;es, y compris la protection
                  contre le traitement non autoris&eacute; ou illicite et contre la perte, la
                  destruction ou les d&eacute;g&acirc;ts d&apos;origine accidentelle, &agrave;
                  l&apos;aide de mesures techniques ou organisationnelles appropri&eacute;es. &nbsp;
                </span>
              </li>
            </ul>
            <p>
              Le traitement n&apos;est licite que si, et dans la mesure o&ugrave;, au moins une des
              conditions suivantes est remplie :&nbsp;
            </p>
            <ul>
              <li>
                <span>
                  La personne concern&eacute;e a consenti au traitement de ses donn&eacute;es
                  &agrave; caract&egrave;re personnel pour une ou plusieurs finalit&eacute;s
                  sp&eacute;cifiques ;
                </span>
              </li>
              <li>
                <span>
                  Le traitement est n&eacute;cessaire &agrave; l&apos;ex&eacute;cution d&apos;un
                  contrat auquel la personne concern&eacute;e est partie ou &agrave;
                  l&apos;ex&eacute;cution de mesures pr&eacute;contractuelles prises &agrave; la
                  demande de celle-ci ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Le traitement est n&eacute;cessaire au respect d&apos;une obligation l&eacute;gale
                  &agrave; laquelle le responsable du traitement est soumis ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Le traitement est n&eacute;cessaire &agrave; la sauvegarde des
                  int&eacute;r&ecirc;ts vitaux de la personne concern&eacute;e ou d&apos;une autre
                  personne physique ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Le traitement est n&eacute;cessaire &agrave; l&apos;ex&eacute;cution d&apos;une
                  mission d&apos;int&eacute;r&ecirc;t public ou relevant de l&apos;exercice de
                  l&apos;autorit&eacute; publique dont est investi le responsable du traitement
                  ;&nbsp;
                </span>
              </li>
              <li>
                <span>
                  Le traitement est n&eacute;cessaire aux fins des int&eacute;r&ecirc;ts
                  l&eacute;gitimes poursuivis par le responsable du traitement ou par un tiers,
                  &agrave; moins que ne pr&eacute;valent les int&eacute;r&ecirc;ts ou les
                  libert&eacute;s et droits fondamentaux de la personne concern&eacute;e qui exigent
                  une protection des donn&eacute;es &agrave; caract&egrave;re personnel, notamment
                  lorsque la personne concern&eacute;e est un enfant.&nbsp;
                </span>
              </li>
            </ul>

            <h2>
              ARTICLE 3 : Donn&eacute;es &agrave; caract&egrave;re personnel collect&eacute;es et
              trait&eacute;es dans le cadre de la navigation sur le site &nbsp;
            </h2>

            <h3>Article 3.1 : Donn&eacute;es collect&eacute;es &nbsp;</h3>
            <p>
              Les donn&eacute;es personnelles collect&eacute;es dans le cadre de notre
              activit&eacute; sont les suivantes : &nbsp;
            </p>
            <ul>
              <li>Nom</li>
              <li>Pr&eacute;nom</li>
              <li>Adresse mail</li>
              <li>T&eacute;l&eacute;phone</li>
              <li>Ville</li>
            </ul>
            <p>
              La collecte et le traitement de ces donn&eacute;es r&eacute;pond &agrave; la
              finalit&eacute; suivante : &nbsp;
            </p>
            <div>
              <ul>
                <li>
                  B&eacute;n&eacute;volat au sein de l&rsquo;association franco-ukrainienne Volya
                </li>
              </ul>
            </div>

            <h3>Article 3.2 : Mode de collecte des donn&eacute;es&nbsp;</h3>
            <p>
              Des donn&eacute;es personnelles sont collect&eacute;es lorsque vous effectuez les
              op&eacute;rations suivantes sur la plateforme : &nbsp;
            </p>
            <div>
              <ul>
                <li>
                  <span>
                    Saisie du formulaire de b&eacute;n&eacute;volat au sein de l&rsquo;association.
                  </span>
                </li>
              </ul>
            </div>
            <p>
              Elles sont conserv&eacute;es par le responsable du traitement dans des conditions
              raisonnables de s&eacute;curit&eacute;, pour une dur&eacute;e de 3 ans.&nbsp;
            </p>
            <p>
              La soci&eacute;t&eacute; est susceptible de conserver certaines donn&eacute;es
              &agrave; caract&egrave;re personnel au-del&agrave; des d&eacute;lais annonc&eacute;s
              ci-dessus afin de remplir ses obligations l&eacute;gales ou
              r&eacute;glementaires.&nbsp;
            </p>

            <h3>Article 3.3 : H&eacute;bergement des donn&eacute;es&nbsp;</h3>
            <p>
              Le site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink>
              est h&eacute;berg&eacute; par la soci&eacute;t&eacute; Netlify, dont le si&egrave;ge
              social est situ&eacute; au 2325 3rd Street, Suite 215 94107 San Francisco, USA,
              pouvant &ecirc;tre contact&eacute; via le formulaire{' '}
              <StyledALink href={`https://www.netlify.com/support/`}>
                https://www.netlify.com/support/
              </StyledALink>
              .
            </p>

            <h2>
              ARTICLE 4 : Responsable du traitement des donn&eacute;es et
              d&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es &nbsp;
            </h2>

            <h3>Article 4.1 : Le responsable du traitement des donn&eacute;es &nbsp;&nbsp;</h3>
            <p>
              Les donn&eacute;es &agrave; caract&egrave;re personnelles sont collect&eacute;es
              par&nbsp;ASSOCIATION FRANCO-UKRAINIENNE VOLYA Association loi de 1901,
              immatricul&eacute;e au R&eacute;pertoire National des Associations de Nantes sous le
              num&eacute;ro 918566043.
            </p>
            <p>
              Le responsable du traitement des donn&eacute;es &agrave; caract&egrave;re personnel
              peut &ecirc;tre contact&eacute; par mail &agrave; l&rsquo;adresse
              <StyledALink href={`mailto: ukraine@volya-asso.fr`}>
                {' '}
                ukraine@volya-asso.fr
              </StyledALink>
              .
            </p>

            <h2>
              ARTICLE 5 : Les droits de l&rsquo;utilisateur en mati&egrave;re de collecte et de
              traitement des donn&eacute;es &nbsp;
            </h2>
            <p>
              Tout utilisateur concern&eacute; par le traitement de ses donn&eacute;es personnelles
              peut se pr&eacute;valoir des droits suivants, en application du r&egrave;glement
              europ&eacute;en 2016/679 et de la Loi Informatique et Libert&eacute; (Loi 78-17 du 6
              janvier 1978) : &nbsp;&nbsp;
            </p>
            <ul>
              <li>
                <span>
                  Droit d&rsquo;acc&egrave;s, de rectification et droit &agrave; l&rsquo;effacement
                  des donn&eacute;es (pos&eacute;s respectivement aux articles 15, 16 et 17 du RGPD)
                  ; &nbsp;
                </span>
                &nbsp;
              </li>
              <li>
                <span>
                  Droit &agrave; la portabilit&eacute; des donn&eacute;es (article 20 du RGPD)
                  ;&nbsp;
                </span>
                &nbsp;
              </li>
              <li>
                <span>
                  Droit &agrave; la limitation (article 18 du RGPD) et &agrave; l&rsquo;opposition
                  du traitement des donn&eacute;es (article 21 du RGPD) ; &nbsp;&nbsp;
                </span>
                &nbsp;
              </li>
              <li>
                <span>
                  Droit de ne pas faire l&rsquo;objet d&rsquo;une d&eacute;cision fond&eacute;e
                  exclusivement sur un proc&eacute;d&eacute; automatis&eacute; ; &nbsp;
                </span>
                &nbsp;
              </li>
              <li>
                <span>
                  Droit de d&eacute;terminer le sort des donn&eacute;es apr&egrave;s la mort ;
                  &nbsp;
                </span>
                &nbsp;
              </li>
              <li>
                <span>
                  Droit de saisir l&rsquo;autorit&eacute; de contr&ocirc;le comp&eacute;tente
                  (article 77 du RGPD). &nbsp;
                </span>
              </li>
            </ul>
            <p>
              Pour exercer vos droits, veuillez adresser mail &agrave;{' '}
              <StyledALink href={`mailto: ukraine@volya-asso.fr`}>
                ukraine@volya-asso.fr
              </StyledALink>
              .
            </p>
            <p>
              Afin que le responsable du traitement des donn&eacute;es puisse faire droit &agrave;
              sa demande, l&rsquo;utilisateur peut &ecirc;tre tenu de lui communiquer certaines
              informations telles que : ses noms et pr&eacute;noms ainsi que son adresse e-mail.
              &nbsp;
            </p>
            <p>Consultez le site cnil.fr pour plus d&rsquo;informations sur vos droits.&nbsp;</p>

            <h2>
              ARTICLE 6 : Conditions de modification de la politique de confidentialit&eacute;
            </h2>
            <p>
              L&rsquo;&eacute;diteur du site{' '}
              <StyledALink href={`https://volya-asso.fr/`}>https://volya-asso.fr/</StyledALink> se
              r&eacute;serve le droit de pouvoir modifier la pr&eacute;sente Politique &agrave; tout
              moment afin d&rsquo;assurer aux utilisateurs du site sa conformit&eacute; avec le
              droit en vigueur. &nbsp;
            </p>
            <p>
              Les &eacute;ventuelles modifications ne sauraient avoir d&rsquo;incidence sur les
              achats ant&eacute;rieurement effectu&eacute;s sur le site, lesquels restent soumis
              &agrave; la Politique en vigueur au moment de l&rsquo;achat et telle
              qu&rsquo;accept&eacute;e par l&rsquo;utilisateur lors de la validation de
              l&rsquo;achat. &nbsp;
            </p>
            <p>
              L&rsquo;utilisateur est invit&eacute; &agrave; prendre connaissance de cette Politique
              &agrave; chaque fois qu&rsquo;il utilise nos services, sans qu&rsquo;il soit
              n&eacute;cessaire de l&rsquo;en pr&eacute;venir formellement. &nbsp;
            </p>
          </PrivacyPolicyContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default PrivacyPolicy;
