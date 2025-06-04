"use client"
import PageContext from "@/context/PageProvider";
import { useContext } from "react";

export const usePage = () => {
  return useContext(PageContext);
};
