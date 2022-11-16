import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Nomes {
	@PrimaryColumn()
	id: number

	@Column("text")
	name: string

	@Column("integer")
	age: number
}


