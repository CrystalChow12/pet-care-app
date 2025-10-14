"use server";

import { connectDB } from "./../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import type { Owner } from "../../types";

export async function getAllOwners(): Promise<Owner[]> {
  const conn = await connectDB();

  try {
    const [rows] = await conn.query<RowDataPacket[]>("SELECT * FROM owners;");

    return rows as Owner[];
  } catch (error) {
    console.log("Error reading from database", error);
    throw new Error("Failed to fetch owners");
  }
}

//omit the id since its not inserted
export async function addOwner({
  firstname,
  lastname,
  email,
  phone,
}: Omit<Owner, "id">): Promise<any> {
  const conn = await connectDB();

  try {
    const [result] = await conn.execute<ResultSetHeader>(
      `INSERT INTO Owners (firstname, lastname, email, phone) VALUES (?,?,?,?); `,
      [firstname, lastname, email?.trim() || null, phone]
    ); 

    return {result, message: "Owner successfully inserted" };
  } catch (error) {
    console.log("Error while inserting ", error);
    return { message: "Error inserting into Owners table" }; //return this to the client
  }

  //    The returned result has this structure
  //     {
  //         fieldCount: number;
  //         affectedRows: number;
  //         insertId: number;
  //         info: string;
  //         serverStatus: number;
  //         warningStatus: number;
  //         changedRows: number;
  //     }
}
