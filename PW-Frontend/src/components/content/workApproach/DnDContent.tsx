import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

type Item = {
  id: string;
  content: string;
};

const initialItems: Item[] = [
  {
    id: "WorkApproach-1",
    content: "Work Approach 1",
  },
  {
    id: "WorkApproach-2",
    content: "Work Approach 2",
  },
  {
    id: "WorkApproach-3",
    content: "Work Approach 3",
  },
  {
    id: "WorkApproach-4",
    content: "Work Approach 4",
  },
];

const DnDContent = () => {
  const [itemList, setItemList] = useState(initialItems);

  const handleDrag = (results: any) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderList = [...itemList];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [reorderedItem] = reorderList.splice(sourceIndex, 1);
      reorderList.splice(destinationIndex, 0, reorderedItem);

      return setItemList(reorderList);
    }
  };
  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="droppable-1" type="group">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {itemList.map((item: Item, index: number) => (
              <Draggable draggableId={item.id} key={item.id} index={index}>
                {(provided, snapshot) => (
                  <List
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    $isDragging={snapshot.isDragging}
                  >
                    <div key={index}>{item.content}</div>
                  </List>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

interface ListProps {
  $isDragging: boolean;
}

const Container = styled.ul`
  row-gap: 0.75rem;
`;
const List = styled.li<ListProps>`
  user-select: none;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 12px;
  background-color: ${(props) => (props.$isDragging ? "#525253" : "#353536")};
  box-shadow: ${(props) =>
    props.$isDragging
      ? "5px 5px 10px rgba(37, 37, 37, 0.8)"
      : "0px 0px 0px rgba(0, 0, 0, 0.8)"};
  border: ${(props) =>
    props.$isDragging ? "solid 2px #ffffff" : "solid 2px #646464"};
  transition: box-shadow 0.5s ease;
`;

export default DnDContent;
