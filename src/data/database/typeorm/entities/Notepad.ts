import { Column, Entity, Index, OneToMany } from "typeorm";
import { NotepadFolder } from "./NotepadFolder";

@Index("notepad_NAME_IDX", ["name"], { unique: true })
@Entity("notepad", { schema: "ms-notepad" })
export class Notepad {
  @Column("varchar", { primary: true, name: "ID", length: 255 })
  id: string;

  @Column("varchar", { name: "NAME", unique: true, length: 30 })
  name: string;

  @Column("varchar", { name: "NOTE", nullable: true, length: 100 })
  note: string | null;

  @OneToMany(() => NotepadFolder, (notepadFolder) => notepadFolder.idNote2)
  notepadFolders: NotepadFolder[];
}
