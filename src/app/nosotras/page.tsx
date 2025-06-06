"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { about } from "./Data/aboutus";

export default function Nosotras() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      className="flex flex-col  items-center justify-center  min-h-screen bg-gradient-to-b from-[#1bb092] via-[#da6c13] to-[#9a430a] to-99% "
      id="nosotras"
    >
      <div className="w-full">
        {about.map((sobrenosotras) => (
          <div key={sobrenosotras.id} className="flex flex-col mx-40 px-40 ">
            <Accordion
              expanded={expanded === String(sobrenosotras.id)}
              onChange={handleChange(String(sobrenosotras.id))}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${sobrenosotras.id}-content`}
                id={`${sobrenosotras.id}-header`}
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
