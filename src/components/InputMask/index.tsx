import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Label, Error } from './styles';

interface InputMaskProps
  extends InputProps,
    InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputMask: React.FC<InputMaskProps> = ({
  icon: Icon,
  name,
  label,
  ...rest
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue('value');
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label htmlFor={fieldName}>{label}</Label>
      <Container isErrored={!!error} isFocused={isFocused}>
        {Icon && <Icon size={17} />}
        <ReactInputMask
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle size={17} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default InputMask;
