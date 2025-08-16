"use client";

import { Button } from "./button";
import { CircleUserRound } from "lucide-react";
import { Session } from "next-auth";
import { signIn} from "next-auth/react"


export const User = ({ session }: { session: Session | null}) => {

  return <div>
    {session?.user ? <CircleUserRound /> : <Button onClick={() => signIn("google")}>Login</Button>}
  </div>
};
