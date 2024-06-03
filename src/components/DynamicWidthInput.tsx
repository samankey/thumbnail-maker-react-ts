import React, { useState } from 'react';
import { useDynamicInputWidth } from '@/hooks/useDynamicInputWidth.tsx';
import { AppTypoTokenVars } from '@/styles/AppTypo.ts';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  background-color: aquamarine;
  ${AppTypoTokenVars.HEAD_XXL.css};
`;
const InputMirror = styled.div`
  display: inline-block;
  visibility: hidden;
  height: 0;
  letter-spacing: normal;
  ${AppTypoTokenVars.HEAD_XXL.css};
`;
export const DynamicWidthInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { divRef, width } = useDynamicInputWidth(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Input type={'text'} value={inputValue} width={width} onChange={handleChange} />
      <InputMirror ref={divRef} aria-hidden>
        {inputValue || ' '}
      </InputMirror>
    </Wrapper>
  );
};
