/* eslint-disable no-undef */
import mysql from "mysql2/promise"

export const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
})

export async function getUsers() {
    const [rows] = await db.query("SELECT * FROM product");
    return rows.map(row => {
        // แปลง Buffer เป็น Base64
        const imageBase64 = row.Product_img.toString('base64');
        // console.log(row.Product_img)
        return {
          ...row,
          Product_img: imageBase64,  // ส่งข้อมูลเป็น Base64
        };
      });
}

