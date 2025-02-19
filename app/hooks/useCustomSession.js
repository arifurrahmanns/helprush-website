"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authRoutes, publicRoutes } from "../routes";

export function useCustomSession() {
  const { data: lieSession, status, update } = useSession();
  const [truthSession, setUpdatedSession] = useState < Session | null > (null);

  const pathname = usePathname();

  useEffect(() => {
    update().then((s) => {
      setUpdatedSession(s);
    });
    
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const session =
    publicRoutes.includes(pathname) || authRoutes.includes(pathname)
      ? truthSession
      : lieSession;

  return { session, status, update };
}