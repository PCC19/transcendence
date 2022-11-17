//import { Entity, Column, PrimaryColumn } from "typeorm"
const { Entity } = require('typeorm')
const { Column } = require('typeorm')
const { PrimaryColumn } = require('typeorm')

@Entity()
export class Nomes {
	@PrimaryColumn()
	id: number

	@Column("text")
	name: string

	@Column("integer")
	age: number
}


