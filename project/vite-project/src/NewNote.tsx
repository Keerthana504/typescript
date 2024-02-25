import { NoteData, Tag } from "./App";
import { NoteForms } from "./NoteForms";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tags: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4"> New Note</h1>
      <NoteForms
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
