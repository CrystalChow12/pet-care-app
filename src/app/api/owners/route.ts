// import { NextResponse } from 'next/server'; 
// import { connectDB } from './../../../lib/db'; 


// const conn = await connectDB(); 


// /* GET all owners */

// export async function GET() {
//     try {
//         const [rows] = await conn.query('SELECT * FROM owners;')
//         return NextResponse.json(rows); 
//     } catch (error) {
//         return NextResponse.json({error: 'Failed to fetch'}, {status:500}); 
//     }
// }
