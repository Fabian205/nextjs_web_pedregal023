import { pool } from "@/config/db";
import { serialize } from "cookie";

export default async function signinHandler(req, res) {
  const { user, password } = req.body;
  //console.log(user, password);
  const jwt = require("jsonwebtoken");
  // check if email and password are valid
  try {    
    const [result] = await pool.query(
      "SELECT nomb_adm, cargo_adm, user_adm, pwd_adm FROM directiva WHERE user_adm = '" +
        user +
        "' AND pwd_adm = '" +
        password +
        "'"      
    );

    const bdnombre = result[0].nomb_adm;
    const bdcargo = result[0].cargo_adm;
    const bduser = result[0].user_adm;
    const bdpassword = result[0].pwd_adm;
    
    /* const datos = {
      nombre: bdnombre,
      cargo: bdcargo
    }; */
    //For production create the environment variables for secret words
    if (user === bduser && password === bdpassword) {            
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          user: user,
          name: bdnombre,
          post: bdcargo,
          username: "nobasys",
        },
        //"secret"
        process.env.NEXTAUTH_SECRET
      );
      const serialized = serialize("myTokenName", token, {
        httpOnly: true,
        //secure: process.env.NODE_ENV === "production",
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      //console.log("D A T O S",datos);
      //return res.status(200).json(datos); 
      return res.status(200).json("Login successfuly");               
    }
    return res.status(401).json({ error: "Invalid email or password" });
  } catch (error) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
}
