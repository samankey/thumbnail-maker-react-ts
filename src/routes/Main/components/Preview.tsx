import { useState, DragEvent } from 'react';
import { DraggableTagList } from '@/components/DraggableTagList.tsx';

export const Preview = () => {
  // tags 배열에는 각 input 요소의 고유 식별자가 저장됩니다.
  const [tags, setTags] = useState<string[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);

  // 새로운 input 요소를 tags 배열에 추가하는 함수
  const handleAddTagClick = () => {
    // 새로운 input 요소의 고유 식별자 생성 (여기서는 현재 시간을 사용)
    const newTagId = `tag-${Date.now()}`;
    setTags([...tags, newTagId]);
  };

  // 드래그 시작 시 핸들러
  const handleDragStart = (e: DragEvent<HTMLDivElement>, position: number) => {
    const img = new Image(); // 투명한 이미지 생성
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='; // 1x1 픽셀 투명 GIF
    e.dataTransfer.setDragImage(img, 0, 0); // 잔상을 투명 이미지로 대체

    setDragging(position);
  };

  // 드래그 중 드래그 오버된 요소 위에서 발생하는 이벤트 핸들러
  const handleDragEnter = (e: DragEvent<HTMLDivElement>, position: number) => {
    if (dragging !== position) {
      const newTags = [...tags];
      const draggedItemContent = newTags.splice(dragging ?? 0, 1)[0];
      newTags.splice(position, 0, draggedItemContent);
      setDragging(position);
      setTags(newTags);
    }
  };

  // 드래그 종료 시 핸들러
  const handleDragEnd = () => {
    setDragging(null);
  };
  return (
    <div>
      <DraggableTagList
        tags={tags}
        dragging={dragging}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      />
      <button onClick={handleAddTagClick}>{'추가'}</button>
    </div>
  );
};
