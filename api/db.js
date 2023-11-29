import mysql from "mysql"


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Srey@s030401",
    database:"blog_app"
  })