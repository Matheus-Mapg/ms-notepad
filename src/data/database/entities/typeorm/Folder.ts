import { Column, Entity, Index, OneToMany } from "typeorm";
import { NotepadFolder } from "./NotepadFolder";

@Index("folder_NAME_IDX", ["name"], { unique: true })
@Entity("folder", { schema: "ms-notepad" })
export class Folder {
  @Column("varchar", { primary: true, name: "ID", length: 255 })
  id: string;

  @Column("varchar", { name: "NAME", unique: true, length: 30 })
  name: string;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @OneToMany(() => NotepadFolder, (notepadFolder) => notepadFolder.idFolder2)
  notepadFolders: NotepadFolder[];
}
