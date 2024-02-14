import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css';
import XBtn from '../../components/buttons/xBtn';
import { AppSettings } from '../../App';
import MyTextInput from '../../components/forms/textInput';
import SubmitButton from '../../components/forms/submitButton';

const axios = require('axios');

function Login() {
  const { settings } = useContext(AppSettings);

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('center');
    window.resizeTo(...settings.menuResolution);
  }, []);
  const [submissionError, setSubmissionError] = useState(null);
  const navigate = useNavigate();

  function handleAppClose() {
    window.electron.ipcRenderer.sendMessage('close');
  }

  const handleSubmit = async (values) => {
    const { email, password } = values;
    axios
      .post('http://localhost:5000/auth/login', {
        username: email,
        password,
      })
      .then(function (response) {
        navigate('/menu');
      })
      .catch(function (error) {
        setSubmissionError(error);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, 'Password must be 6 characters long')
          .matches(/[0-9]/, 'Password requires a number')
          .required('Required'),
      })}
      onSubmit={async (values) => await handleSubmit(values)}
      validateOnBlur={false}
    >
      {(formik) => (
        <div className={styles.container}>
          <Form>
            <div className={styles.list}>
              <div className={styles.block}>
                <span className={styles.signInText}>Вхiд в аккаунт</span>
                <div className={styles.field}>
                  <label htmlFor="email">Пошта</label>
                  <MyTextInput
                    name="email"
                    type="email"
                    placeholder="jane@formik.com"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="password">Пароль</label>
                  <MyTextInput
                    name="password"
                    type="password"
                    placeholder="********"
                  />
                </div>

                <div
                  className={styles.error}
                  style={{ display: submissionError ? 'block' : 'none' }}
                >
                  Login failed
                </div>

                <div className={styles.field}>
                  <SubmitButton
                    type="submit"
                    name="submit"
                    value="Продовжити"
                    disabled={
                      !(formik.isValid && formik.dirty) || formik.isSubmitting
                    }
                  />
                </div>
              </div>
            </div>
          </Form>

          <div className={styles.buttonGroup}>
            <div className={styles.btn}>
              <XBtn onClick={handleAppClose} />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;
