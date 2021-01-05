import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  SelectHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);
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
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField, defaultValue]);

  return (
    <>
    <label htmlFor={name}>{label}</label>
    <Container isErrored={!!error} isFocused={isFocused}>
      <select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={selectRef}
        id={name}
        {...rest}
      >
        <option value="" hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
    </>
  );
};

export default Select;
