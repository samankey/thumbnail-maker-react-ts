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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value; // 변경될 다음 입력값

    // divRef.current는 InputMirror 요소를 가리킵니다.
    // 임시로 변경될 값을 InputMirror에 설정하여 너비를 측정합니다.
    if (divRef.current) {
      divRef.current.textContent = nextValue || ' '; // 비어있는 경우 공백 문자를 넣어 최소 너비 유지
      const mirrorWidth = divRef.current.offsetWidth; // 변경될 값의 예상 너비

      // 예상 너비가 최대 너비(750px)을 넘지 않는 경우에만 setInputValue를 호출
      if (mirrorWidth <= 700) {
        setInputValue(nextValue);
      }
    }
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
