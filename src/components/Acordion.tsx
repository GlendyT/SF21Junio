import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Sobrenosotrasinterfaces } from "@/types/types";

const Acordion = ({
  sobrenosotras,
  expanded,
  handleChange,
}: Sobrenosotrasinterfaces) => {
  return (
    <Accordion
      sx={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(222, 245, 236, 0.3)",
        borderRadius: "8px",
        margin: "4px 0",
      }}
      expanded={expanded === String(sobrenosotras.id)}
      onChange={handleChange(String(sobrenosotras.id))}
    >
      <AccordionSummary
        expandIcon={
          expanded === String(sobrenosotras.id) ? (
            <RemoveIcon className="text-lg max-md:text-base max-sm:text-sm" />
          ) : (
            <AddIcon className="text-lg max-md:text-base max-sm:text-sm" />
          )
        }
        aria-controls={`${sobrenosotras.id}-content`}
        id={`${sobrenosotras.id}-header`}
        sx={{
          borderBottom: "2px solid #1d4116",
          py: "8px",
          px: "16px",
          "@media (max-width: 768px)": {
            py: "6px",
            px: "12px",
          },
          "@media (max-width: 640px)": {
            py: "4px",
            px: "8px",
          },
        }}
      >
        <Typography
          component="span"
          sx={{
            width: "100%",
            flexShrink: 0,
            color: "#1d4116",
            fontWeight: "bold",
            fontSize: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
              lg: "1.125rem",
            },
            lineHeight: {
              xs: "1.2",
              sm: "1.3",
              md: "1.4",
            },
          }}
        >
          {sobrenosotras.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: "16px",
          py: "12px",
          "@media (max-width: 768px)": {
            px: "12px",
            py: "8px",
          },
          "@media (max-width: 640px)": {
            px: "8px",
            py: "6px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
              md: "0.9rem",
              lg: "1rem",
            },
            color: "#1d4116",
            fontWeight: "normal",
            lineHeight: {
              xs: "1.4",
              sm: "1.5",
              md: "1.6",
            },
          }}
        >
          {sobrenosotras.content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Acordion;
