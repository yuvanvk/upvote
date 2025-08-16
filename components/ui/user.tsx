"use client";

import { Button } from "./button";
import { Session } from "next-auth";
import { signIn, signOut} from "next-auth/react"


export const User = ({ session }: { session: Session | null}) => {

  return <div>
    {session?.user ? <Button onClick={() => signOut()}>Logout</Button> : <Button onClick={() => signIn("google")}>Login</Button>}
  </div>
};
