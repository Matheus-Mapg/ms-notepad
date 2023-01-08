import { Column, Entity, OneToMany } from "typeorm";
import { NotepadFolder } from "./NotepadFolder";

@Entity("notepad", { schema: "ms-notepad" })
export class Notepad {
  @Column("varchar", { primary: true, name: "ID", length: 255 })
  id: string;

  @Column("varchar", { name: "NAME", length: 30 })
  name: string;

  @Column("varchar", { name: "NOTE", nullable: true, length: 100 })
  note: string | null;

  @Column("datetime", {
    name: "CREATE_AT",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date | null;

  @Column("datetime", {
    name: "UPDATE_AT",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date | null;

  @OneToMany(() => NotepadFolder, (notepadFolder) => notepadFolder.idNote2)
  notepadFolders: NotepadFolder[];
}
