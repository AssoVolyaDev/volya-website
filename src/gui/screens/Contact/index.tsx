import React, { ReactElement } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// import * as FirebaseFunctions from '../../../firebase/functions';
import { Theme } from '../../../style/theme';
import { ContentContainer } from '../../components/common';
import {
  InnerPageContainer,
  PageContainer,
  ContentPageContainer
} from '../../components/pageContainer';
import * as NotificationUtils from '../../../utils/notificationUtils';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

export const Label = styled.label`
  font-size: 1.5em;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:focus {
    outline: none;
    border-bottom: ${({ theme }: { theme: Theme }) => `2px solid ${theme.linkHoverColor}`};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 168px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 10px 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  resize: none;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:focus {
    outline: none;
    border-bottom: ${({ theme }: { theme: Theme }) => `2px solid ${theme.linkHoverColor}`};
  }
`;

export const ErrorMessage = styled.div`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.redColor};
  margin-top: 5px;
  min-height: 20px;
`;

const ContactFormContentContainer = styled(ContentContainer)`
  min-height: 500px;
`;

interface ContactFormError {
  lastName?: string;
  firstName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = (): ReactElement => {
  const validate = (values: {
    firstName?: string;
    lastName?: string;
    email?: string;
    subject?: string;
    message?: string;
  }): ContactFormError => {
    console.log('values', values);
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
    if (values.subject === undefined || values.subject === null || values.subject.length === 0) {
      errors.subject = 'Champ requis';
    }
    if (values.message === undefined || values.message === null || values.message.length === 0) {
      errors.message = 'Champ requis';
    }

    console.log('errors', errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      // FirebaseFunctions.contact(values.lastName, values.firstName, values.email, values.subject, values.message, () => {
      NotificationUtils.handleMessage(
        `Votre message a été envoyé. Nous vous répondrons dès que possible.`
      );
      setSubmitting(false);
      // }, () => setSubmitting(false));
    }
  });

  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Nous contacter</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContactFormContentContainer>
          <h2 style={{ textAlign: 'center', marginBottom: 50 }}>
            Une question sur l&apos;application ou l&apos;un des scénarios ? Merci de remplir le
            formulaire ci-dessous :
          </h2>
          <Form onSubmit={formik.handleSubmit}>
            <InputContainer>
              <Label htmlFor="lastName">Nom</Label>
              <Input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
              <ErrorMessage>
                {formik.touched.lastName === true && formik.errors.lastName !== undefined
                  ? formik.errors.lastName
                  : ''}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Label htmlFor="firstName">Prénom</Label>
              <Input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
              <ErrorMessage>
                {formik.touched.firstName === true && formik.errors.firstName !== undefined
                  ? formik.errors.firstName
                  : ''}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Label htmlFor="email">Adresse mail</Label>
              <Input id="email" type="email" {...formik.getFieldProps('email')} />
              <ErrorMessage>
                {formik.touched.email === true && formik.errors.email !== undefined
                  ? formik.errors.email
                  : ''}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Label htmlFor="subject">Objet</Label>
              <Input id="subject" type="text" {...formik.getFieldProps('subject')} />
              <ErrorMessage>
                {formik.touched.subject === true && formik.errors.subject !== undefined
                  ? formik.errors.subject
                  : ''}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" {...formik.getFieldProps('message')} />
              <ErrorMessage>
                {formik.touched.message === true && formik.errors.message !== undefined
                  ? formik.errors.message
                  : ''}
              </ErrorMessage>
            </InputContainer>

            {/* TODO color: 'white' à mettre dans bootstrap.scss d'une manière ou d'une autre */}
            <Button
              size="lg"
              variant="primary"
              style={{ color: 'white' }}
              type="submit"
              disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </Button>
          </Form>
        </ContactFormContentContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Contact;
