import mysql from 'mysql2/promise';
import type { Connection } from 'mysql2/promise';

export let conn: Connection;

export async function connectDB(): Promise<Connection> {
	if (!conn) {
		conn = await mysql.createConnection({
			host: process.env.DATABASE_HOST,
			user: process.env.DATABASE_USER,
			database: process.env.DATABASE_NAME,
			password: process.env.DATABASE_PASSWORD,
			port: Number(process.env.DATABASE_PORT)
		});

		return conn; 
	} 
	return conn; 
}
