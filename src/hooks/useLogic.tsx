"use client";
import { useContext } from "react";
import LogicContext from "@/context/LogicProvider";

export const useLogic = () => {
  return useContext(LogicContext);
};
