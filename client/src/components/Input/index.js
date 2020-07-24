import React from 'react';
import { FormGroup, Input, Label, Button, Form, Alert } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
const CustomInput = ({ label, type, name, text,defaultValue, placeholder, control, errors, rules }) => {
  return (
    <FormGroup style={{ width: '75%', margin: '5vh auto' }}>
      <Label for={label}>{text}</Label>
      <Controller
        control={control}
        as={<Input type={type} placeholder={placeholder} />}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      ></Controller>
      <ErrorMessage as={<Alert color="danger" />} errors={errors} name={name}>
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className="text-danger" key={type}>
              {message}
            </p>
          ))
        }
      </ErrorMessage>
    </FormGroup>
  );
};

export default CustomInput;
