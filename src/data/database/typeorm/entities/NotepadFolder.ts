import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Notepad } from "./Notepad";
import { Folder } from "./Folder";

@Index("notepad_folder_FK", ["idNote"], {})
@Index("notepad_folder_FK_1", ["idFolder"], {})
@Entity("notepad_folder", { schema: "ms-notepad" })
export class NotepadFolder {
  @Column("varchar", { name: "ID_NOTE", length: 255 })
  idNote: string;

  @Column("varchar", { name: "ID_FOLDER", length: 255 })
  idFolder: string;

  @ManyToOne(() => Notepad, (notepad) => notepad.notepadFolders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ID_NOTE", referencedColumnName: "id" }])
  idNote2: Notepad;

  @ManyToOne(() => Folder, (folder) => folder.notepadFolders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ID_FOLDER", referencedColumnName: "id" }])
  idFolder2: Folder;
}
