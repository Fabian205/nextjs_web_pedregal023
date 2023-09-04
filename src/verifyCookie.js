import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

export default function verifyCookie(req, res, next) {
  // Obtén las cookies del encabezado de la solicitud
  const cookies = parse(req.headers.cookie || '');

  // Verifica si la cookie JWT está presente
  if (!cookies.jwt) {
    return res.status(401).json({ message: 'Cookie JWT no encontrada' });
  }

  // Verifica la validez del token JWT
  try {
    const decodedToken = jwt.verify(cookies.jwt, 'secret'); // Reemplaza 'tu_secreto_jwt' con tu clave secreta JWT
    req.user = decodedToken; // Almacena la información del usuario en el objeto de solicitud
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token JWT inválido' });
  }
}