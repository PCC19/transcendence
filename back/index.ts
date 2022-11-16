import "reflect-metadata"
import { Datasource } from "typeorm"
import { Nomes } from "./testeorm.ts"

const Fonte = new DataSource({
	type: "postgres"
	host: "postgres"
	port: 5432 
	username: root
	password: imroot
})

Fonte.initialize()
	.then(() => {
		// Start working with database
	})
	.catch((error) => console.log(error))

