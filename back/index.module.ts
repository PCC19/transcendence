//define module "reflect-metadata"
//import "reflect-metadata";
import { Datasource } from "@nestjs/typeorm";
import { Nomes } from "./testeorm.ts";
//const { Datasource } = require('typeorm')
//const { Nomes } = require('./testeorm.ts')

const Fonte = new DataSource({
	type: "postgres",
	host: "postgres",
	port: 5432,
	username: root,
	password: imroot,
	entities: [Nomes],
})

Fonte.initialize()
	.then(() => {
		// Start working with database
	})
	.catch((error) => console.log(error))

