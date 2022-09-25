import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import * as Constants from '../../../constants';
// import * as FirebaseFunctions from '../../../firebase/functions';
import { ContentContainer, StyledALink, StyledLink } from '../../components/common';
import {
  InnerPageContainer,
  PageContainer,
  ContentPageContainer
} from '../../components/pageContainer';
import * as NotificationUtils from '../../../utils/notificationUtils';

const ContactFormContentContainer = styled(ContentContainer)`
  min-height: 500px;
`;

export const FormColumnsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const FormColumn = styled.div<{ disposal: 'left' | 'right' }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 15px;
  ${({ disposal }) => (disposal === 'left' ? `margin-right: 15px;` : `margin-left: 15px;`)};
`;

export const VolunteerFormDescription = styled.div`
  border: 5px solid white;
  background-color: ${({ theme }) => theme.otherBackgroundColor};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 15px;
`;

export const ErrorMessage = styled(Form.Text)`
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 2px;
`;

const TASKS = [
  'donationCollection',
  'donationSorting',
  'administrativeTasks',
  'socialNetworks',
  'fle',
  'nationalsSupport',
  'translation'
];

interface ContactFormError {
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  city?: string;
  tasks?: string;
  comment?: string;
  consent?: string;
}

interface FormValues {
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  city?: string;
  // Champ virtuel pour la gestion de l'erreur sur les tâches
  tasks?: string[];
  donationCollection?: boolean;
  donationSorting?: boolean;
  administrativeTasks?: boolean;
  socialNetworks?: boolean;
  fle?: boolean;
  nationalsSupport?: boolean;
  translation?: boolean;
  comment?: string;
  consent?: boolean;
}

const getTasks = (values: FormValues): string[] => {
  const tasks: string[] = [];
  Object.entries(values).forEach((entry) => {
    const [key, value] = entry;
    if (TASKS.includes(key) && value === true) {
      tasks.push(key);
    }
  });
  return tasks;
};

const Contact = (): ReactElement => {
  const { t } = useTranslation();

  const orSendMailComponent = (
    <h4 style={{ marginTop: 25 }}>
      {t('contact.sendMailMessage.1')}
      <StyledALink href={`mailto: ${t('global.contact.email')}`}>
        {t('contact.sendMailMessage.2')}
      </StyledALink>
    </h4>
  );

  // TODO : traduire les messages
  const validate = (values: FormValues): ContactFormError => {
    const errors: ContactFormError = {};
    if (values.lastName === undefined || values.lastName === null || values.lastName.length === 0) {
      errors.lastName = t('global.form.mandatory');
    }
    if (
      values.firstName === undefined ||
      values.firstName === null ||
      values.firstName.length === 0
    ) {
      errors.firstName = t('global.form.mandatory');
    }
    if (values.email === undefined || values.email === null || values.email.length === 0) {
      errors.email = t('global.form.mandatory');
    }

    const tasks = getTasks(values);
    if (tasks.length === 0) {
      errors.tasks = t('contact.volunteer.form.errors.mandatoryTask');
    }

    if (values.consent !== true) {
      errors.consent = t('contact.volunteer.form.errors.mandatoryConsent');
    }

    // console.log('errors', errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      city: '',
      donationCollection: false,
      donationSorting: false,
      administrativeTasks: false,
      socialNetworks: false,
      fle: false,
      nationalsSupport: false,
      translation: false,
      comment: '',
      consent: false
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      // console.log('values', values);
      // console.log('tasks', getTasks(values));

      // TODO : à réactiver quand le formulaire sera validé
      setTimeout(() => {
        NotificationUtils.handleMessage(
          `Votre message n'a pas été envoyé. Ceci est un formulaire de test.`
        );
        setSubmitting(false);
      }, 1500);
      // FirebaseFunctions.contact(
      //   values.lastName,
      //   values.firstName,
      //   values.email,
      //   values.phone,
      //   values.city,
      //   getTasks(values),
      //   values.comment,
      //   new Date()
      //   () => {
      //     NotificationUtils.handleMessage(
      //       `Votre message a été envoyé. Nous vous répondrons dès que possible.`
      //     );
      //     setSubmitting(false);
      //   },
      //   () => setSubmitting(false)
      // );
    }
  });

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContactFormContentContainer>
            <Form onSubmit={formik.handleSubmit}>
              {/* Formulaire pour les bénévoles */}
              <h2 style={{ marginBottom: 50 }}>{t('contact.volunteer.title')}</h2>

              <FormColumnsContainer>
                <FormColumn disposal="left">
                  <h3 style={{ marginBottom: 50 }}>
                    {t('contact.volunteer.subtitle.1')}
                    <span style={{ fontWeight: 'bold' }}>{t('contact.volunteer.subtitle.2')}</span>
                    {t('contact.volunteer.subtitle.3')}
                  </h3>

                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>{t('contact.volunteer.form.lastName')} *</Form.Label>
                    <Form.Control {...formik.getFieldProps('lastName')} />
                    {formik.touched.lastName === true && formik.errors.lastName !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.lastName}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>{t('contact.volunteer.form.firstName')} *</Form.Label>
                    <Form.Control {...formik.getFieldProps('firstName')} />
                    {formik.touched.firstName === true && formik.errors.firstName !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.firstName}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>{t('contact.volunteer.form.email')} *</Form.Label>
                    <Form.Control type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email === true && formik.errors.email !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.email}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>{t('contact.volunteer.form.phone')}</Form.Label>
                    <Form.Control {...formik.getFieldProps('phone')} />
                    {formik.touched.phone === true && formik.errors.phone !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.phone}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>{t('contact.volunteer.form.city')}</Form.Label>
                    <Form.Control {...formik.getFieldProps('city')} />
                    {formik.touched.city === true && formik.errors.city !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.city}
                      </ErrorMessage>
                    )}
                  </Form.Group>
                </FormColumn>
                {/* TODO : sur mobile, plutôt le placer en haut ? */}
                <FormColumn disposal="right" style={{ alignItems: 'flex-end' }}>
                  <VolunteerFormDescription>
                    <h4>{t('contact.volunteer.description.title')}</h4>
                    <ul>
                      <li>{t('contact.volunteer.description.list.1')}</li>
                      <li>{t('contact.volunteer.description.list.2')}</li>
                      <li>{t('contact.volunteer.description.list.3')}</li>
                    </ul>
                  </VolunteerFormDescription>
                </FormColumn>
              </FormColumnsContainer>

              <Form.Group className="mb-3" controlId="tasks">
                <Form.Label>{t('contact.volunteer.form.tasks.title')}</Form.Label>
                {TASKS.map((task) => {
                  return (
                    <Form.Group className="mb-3" controlId={task} key={task}>
                      <Form.Check
                        {...formik.getFieldProps({ task })}
                        label={t(`contact.volunteer.form.tasks.list.${task}`)}
                      />
                    </Form.Group>
                  );
                })}
                {formik.errors.tasks !== undefined && (
                  <ErrorMessage className="bg-white text-danger">
                    {formik.errors.tasks}
                  </ErrorMessage>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="comment">
                <Form.Label>{t('contact.volunteer.form.comment')}</Form.Label>
                <Form.Control as="textarea" {...formik.getFieldProps('comment')} rows={5} />
                {formik.touched.comment === true && formik.errors.comment !== undefined && (
                  <ErrorMessage className="bg-white text-danger">
                    {formik.errors.comment}
                  </ErrorMessage>
                )}
              </Form.Group>

              <Form.Group className="mb-3 mt-5" controlId="consent">
                <Form.Group className="mb-3" controlId="consent">
                  <Form.Check
                    {...formik.getFieldProps('consent')}
                    label={
                      <div>
                        {t('contact.volunteer.form.consent.1')}
                        <StyledLink to="/cgu">{t('contact.volunteer.form.consent.2')}</StyledLink>
                        {t('contact.volunteer.form.consent.3')}
                        <StyledLink to="/confidentialite">
                          {t('contact.volunteer.form.consent.4')}
                        </StyledLink>
                        {t('contact.volunteer.form.consent.5')}
                      </div>
                    }
                  />
                </Form.Group>
                {formik.touched.consent === true && formik.errors.consent !== undefined && (
                  <ErrorMessage className="bg-white text-danger">
                    {formik.errors.consent}
                  </ErrorMessage>
                )}
              </Form.Group>

              {/* TODO : ajouter les disponibilités */}

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit" disabled={formik.isSubmitting} size="lg">
                  {formik.isSubmitting
                    ? t('contact.volunteer.form.submit.loading')
                    : t('contact.volunteer.form.submit.default')}
                </Button>
              </div>
            </Form>
            {orSendMailComponent}

            {/* Information sur comment devenir adhérent ou faire un don */}
            <FormColumnsContainer style={{ marginTop: 50 }}>
              <FormColumn disposal="left">
                <h3 style={{ marginBottom: 50 }}>
                  {t('contact.member.subtitle.1')}
                  <span style={{ fontWeight: 'bold' }}>{t('contact.member.subtitle.2')}</span>
                  {t('contact.member.subtitle.3')}
                </h3>

                <h4>
                  <span style={{ fontWeight: 'bold' }}>
                    {t('contact.member.becomeMemberMessage.1')}
                  </span>
                  <StyledALink href={`${Constants.HELLO_ASSO_URLS.becomeMember}`}>
                    {t('contact.member.becomeMemberMessage.2')}
                  </StyledALink>
                  {t('contact.member.becomeMemberMessage.3')}
                </h4>
                {orSendMailComponent}
              </FormColumn>
              <FormColumn disposal="right">
                <VolunteerFormDescription>
                  <h4>{t('contact.member.description.title')}</h4>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      {t('contact.member.description.helloAsso.1')}
                    </span>
                    <StyledALink href={`${Constants.HELLO_ASSO_URLS.donate}`}>
                      {t('contact.member.description.helloAsso.2')}
                    </StyledALink>
                    {t('contact.member.description.helloAsso.3')}
                  </div>
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    {t('contact.member.description.sendMailToGetRIBMessage.1')}
                  </div>
                  <div>
                    {t('contact.member.description.sendMailToGetRIBMessage.2')}
                    <StyledALink href={`mailto: ${t('global.contact.email')}`}>
                      {t('contact.member.description.sendMailToGetRIBMessage.3')}
                    </StyledALink>
                    {t('contact.member.description.sendMailToGetRIBMessage.4')}
                  </div>
                  {/* TODO - Apportez-nous vos dons : */}
                </VolunteerFormDescription>
              </FormColumn>
            </FormColumnsContainer>
          </ContactFormContentContainer>
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Contact;
