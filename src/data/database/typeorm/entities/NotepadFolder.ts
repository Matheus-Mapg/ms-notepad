import { Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Folder } from "./Folder";
import { Notepad } from "./Notepad";

@Index("notepad_folder_FK", ["idNote"], {})
@Index("notepad_folder_FK_1", ["idFolder"], {})
@Entity("notepad_folder", { schema: "ms-notepad" })
export class NotepadFolder {
  @PrimaryColumn("varchar", { name: "ID_NOTE", length: 255 })
  idNote: string;


  @PrimaryColumn("varchar", { name: "ID_FOLDER", length: 255 })
  idFolder: string;

  @ManyToOne(() => Notepad, (notepad) => notepad.notepadFolders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ID_NOTE", referencedColumnName: "id" }])
  note: Notepad;

  @ManyToOne(() => Folder, (folder) => folder.notepadFolders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ID_FOLDER", referencedColumnName: "id" }])
  folder: Folder;
}
