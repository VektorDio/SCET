import { useField } from 'formik';
import React from 'react';
import styles from './textInput.module.css';
import InlineInput from '../inlineInput';

function MyTextInput({ children, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <InlineInput {...field} {...props} error={meta.touched && meta.error} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default MyTextInput;
