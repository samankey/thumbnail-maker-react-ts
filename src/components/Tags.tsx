import { DragEvent } from 'react';
import { DynamicWidthInput } from '@/components/DynamicWidthInput';
import styled from 'styled-components';

interface TagProps {
  tag: string;
  index: number;
  dragging: number | null;
  handleDragStart: (e: DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnd: () => void;
}

const Tag = styled.div`
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: aquamarine;
  cursor: pointer;
`;

export const Tags = ({ tag, index, dragging, handleDragStart, handleDragEnter, handleDragEnd }: TagProps) => {
  return (
    <Tag
      id={tag}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragEnter={(e) => handleDragEnter(e, index)}
      onDragEnd={handleDragEnd}
      style={{
        opacity: dragging === index ? 0.5 : 1,
      }}
    >
      <DynamicWidthInput />
    </Tag>
  );
};
