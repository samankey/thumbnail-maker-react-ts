import { DragEvent, RefObject } from 'react';
import { Tags } from '@/components/Tags';
import styled from 'styled-components';

interface TagProps {
  tagBoxRef: RefObject<HTMLDivElement>;
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
`;

export const DraggableTagList = ({
  tagBoxRef,
  tags,
  dragging,
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
}: TagProps) => {
  return (
    <TagBox ref={tagBoxRef}>
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
