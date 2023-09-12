import { pool } from "@/config/db";
import { serialize } from "cookie";

export default async function signinHandlerCoprop(req, res) {
  const { user, password } = req.body;
  //console.log(user, password);
  //const jwt = require("jsonwebtoken");
  // check if email and password are valid
  try { 
    const [result] = await pool.query(
      "SELECT * FROM condominos WHERE EMAIL = '" +
        user +
        "' AND CASA = '" +
        password +
        "'"      
    );

    const bduser = result[0].EMAIL;
    const bdpassword = result[0].CASA;
    //console.log(bduser, bdpassword);
    
    /* const datos = {
      email: bduser,
      casa: bdpassword
    };  */
    //For production create the environment variables for secret words
    if (user === bduser && password === bdpassword) {         
      /* const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          user: user,
          username: "nobasys",
        },
        //"secret"
        process.env.NEXTAUTH_SECRET
      );
      const serialized = serialize("myTokenName2", token, {
        httpOnly: true,
        //secure: process.env.NODE_ENV === "production",
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized); */
      //console.log("D A T O S",datos);
      //return res.status(200).json(datos); 
      return res.status(200).json("user succesfuly");               
    }
    return res.status(401).json({ error: "Invalid email or password" });
  } catch (error) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
}