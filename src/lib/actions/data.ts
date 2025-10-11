import {connectDB } from './../db'; 
import { RowDataPacket } from 'mysql2/promise'; 

/* create a type that you can import */
export type Owner = {
    id: number; 
    firstname: string; 
    lastname: string; 
    email: string; 
    phone: string; 
}

export async function getAllOwners() : Promise<Owner[]> {
    const conn = await connectDB(); 

    try {
        const [rows] = await conn.query<RowDataPacket[]>('SELECT * FROM owners;'); 

        return rows as Owner[]; 

    } catch (error) {
        console.log('Error reading from database', error); 
        throw new Error('Failed to fetch owners'); 
    }
}