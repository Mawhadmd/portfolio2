import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { TokenExpireDays } from "./constants";
import { supabase } from "./supabase";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET
);

export async function createToken(payload: JWTPayload | undefined) {
 const newtoken = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TokenExpireDays}d`)
    .sign(secret);
    
return newtoken;
}
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error(error)
    return null;
  }
}
