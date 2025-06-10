"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { about } from "./Data/aboutus";
import Image from "next/image";

export default function Nosotras() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      className="flex flex-col items-center justify-center  min-h-screen bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99% "
      id="nosotras"
    >
      <div className="w-full px-13 sm:px-8 md:px-[8rem]">
        <div className="flex items-center justify-between gap-5 overflow-x-auto">
          <h1 className="text-black font-normal text-lg sm:text-xl md:text-2xl">
            Sobre Sociedad Femenina 21 de Junio, Comalapa
          </h1>
          <Image
            src="/logo.webp"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="w-full px-13 sm:px-8 md:px-[8rem]">
        {about.map((sobrenosotras) => (
          <div key={sobrenosotras.id} className="flex flex-col p-0.5 px-3">
            <Accordion
              sx={{
                background: "transparent",
                boxShadow: "none",
              }}
              expanded={expanded === String(sobrenosotras.id)}
              onChange={handleChange(String(sobrenosotras.id))}
            >
              <AccordionSummary
                expandIcon={
                  expanded === String(sobrenosotras.id) ? (
                    <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
                      -
                    </span>
                  ) : (
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                      +
                    </span>
                  )
                }
                aria-controls={`${sobrenosotras.id}-content`}
                id={`${sobrenosotras.id}-header`}
                sx={{
                  borderBottom: "2px solid black",
                  py: "1px",
                }}
              >
                <Typography
                  component="span"
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  {sobrenosotras.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{sobrenosotras.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
