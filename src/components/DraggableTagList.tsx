import { DragEvent } from 'react';
import { Tags } from '@/components/Tags';
import styled from 'styled-components';

interface TagProps {
  tags: string[];
  dragging: number | null;
  handleDragStart: (e: DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnd: () => void;
}

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 768px;
  height: 400px;
  padding: 10px;
  border: 1px solid red;
`;

export const DraggableTagList = ({ tags, dragging, handleDragStart, handleDragEnter, handleDragEnd }: TagProps) => {
  return (
    <TagBox>
      {tags.map((tag, index) => (
        <Tags
          key={tag}
          tag={tag}
          index={index}
          dragging={dragging}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleDragEnd={handleDragEnd}
        />
      ))}
    </TagBox>
  );
};
