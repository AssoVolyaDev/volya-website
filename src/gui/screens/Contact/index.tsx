import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import * as FirebaseFunctions from '../../../firebase/functions';
import { ContentContainer } from '../../components/common';
import {
  InnerPageContainer,
  PageContainer,
  ContentPageContainer
} from '../../components/pageContainer';
import * as NotificationUtils from '../../../utils/notificationUtils';

const ContactFormContentContainer = styled(ContentContainer)`
  min-height: 500px;
`;

export const VolunteerFormColumn = styled.div<{ disposal: 'left' | 'right' }>`
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
  tasks?: string;
  comment?: string;
}

interface FormValues {
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
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

const validate = (values: FormValues): ContactFormError => {
  const errors: ContactFormError = {};
  if (values.lastName === undefined || values.lastName === null || values.lastName.length === 0) {
    errors.lastName = 'Champ requis';
  }
  if (
    values.firstName === undefined ||
    values.firstName === null ||
    values.firstName.length === 0
  ) {
    errors.firstName = 'Champ requis';
  }
  if (values.email === undefined || values.email === null || values.email.length === 0) {
    errors.email = 'Champ requis';
  }

  const tasks = getTasks(values);
  if (tasks.length === 0) {
    errors.tasks = 'Merci de sélectionner au moins une tâche.';
  }

  // console.log('errors', errors);
  return errors;
};

const Contact = (): ReactElement => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      donationCollection: false,
      donationSorting: false,
      administrativeTasks: false,
      socialNetworks: false,
      fle: false,
      nationalsSupport: false,
      translation: false,
      comment: ''
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
      //   getTasks(values),
      //   values.comment,
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
              <h2 style={{ marginBottom: 50 }}>{t('contact.title')}</h2>

              <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <VolunteerFormColumn disposal="left">
                  <h3 style={{ marginBottom: 50 }}>
                    {t('contact.subtitle.1')}
                    <span style={{ fontWeight: 'bold' }}>{t('contact.subtitle.2')}</span>
                    {t('contact.subtitle.3')}
                  </h3>

                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>{t('contact.form.lastName')} *</Form.Label>
                    <Form.Control {...formik.getFieldProps('lastName')} />
                    {formik.touched.lastName === true && formik.errors.lastName !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.lastName}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>{t('contact.form.firstName')} *</Form.Label>
                    <Form.Control {...formik.getFieldProps('firstName')} />
                    {formik.touched.firstName === true && formik.errors.firstName !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.firstName}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>{t('contact.form.email')} *</Form.Label>
                    <Form.Control type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email === true && formik.errors.email !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.email}
                      </ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>{t('contact.form.phone')}</Form.Label>
                    <Form.Control {...formik.getFieldProps('phone')} />
                    {formik.touched.phone === true && formik.errors.phone !== undefined && (
                      <ErrorMessage className="bg-white text-danger">
                        {formik.errors.phone}
                      </ErrorMessage>
                    )}
                  </Form.Group>
                </VolunteerFormColumn>
                {/* TODO : sur mobile, plutôt le placer en haut ? */}
                <VolunteerFormColumn disposal="right" style={{ alignItems: 'flex-end' }}>
                  <VolunteerFormDescription>
                    <div>{t('contact.description.title')}</div>
                    <ul>
                      <li>{t('contact.description.list.1')}</li>
                      <li>{t('contact.description.list.2')}</li>
                      <li>{t('contact.description.list.3')}</li>
                    </ul>
                  </VolunteerFormDescription>
                </VolunteerFormColumn>
              </div>

              <Form.Group className="mb-3" controlId="tasks">
                <Form.Label>{t('contact.form.tasks.title')}</Form.Label>
                {TASKS.map((task) => {
                  return (
                    <Form.Group className="mb-3" controlId={task} key={task}>
                      <Form.Check
                        {...formik.getFieldProps({ task })}
                        label={t(`contact.form.tasks.list.${task}`)}
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
                <Form.Label>{t('contact.form.comment')}</Form.Label>
                <Form.Control as="textarea" {...formik.getFieldProps('comment')} rows={5} />
                {formik.touched.comment === true && formik.errors.comment !== undefined && (
                  <ErrorMessage className="bg-white text-danger">
                    {formik.errors.comment}
                  </ErrorMessage>
                )}
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit" disabled={formik.isSubmitting} size="lg">
                  {formik.isSubmitting
                    ? t('contact.form.submit.loading')
                    : t('contact.form.submit.default')}
                </Button>
              </div>
            </Form>
            <h3 style={{ marginTop: 50 }}>
              {t('contact.footerMessage.1')}
              <a
                href={`mailto: ${t('contact.footerMessage.2')}`}
                style={{ color: 'black', textDecoration: 'underline' }}>
                {t('contact.footerMessage.2')}
              </a>
            </h3>
          </ContactFormContentContainer>
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Contact;
