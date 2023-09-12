import { verify } from "jsonwebtoken";
import {serialize} from "cookie"


export default function logoutHandlerCopro(req, res){
  const { myTokenName2 } = req.cookies;
  if(!myTokenName2) {
    return res.status(401).json({error: 'no token'});
  }
  //const {email, username} = verify(myTokenName, 'secret')

  try {
    verify(myTokenName2, 'secret')
    const serialized = serialize("myTokenName2", null, {
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production",
      secure: true,
      sameSite:'none',
      maxAge: 0,
      path: "/",
    });
    res.setHeader('Set-Cookie', serialized);
    res.status(200).json('logout successfully');
  } catch (error) {
    return res.status(401).json({ error:'invalid token'});
  }
}