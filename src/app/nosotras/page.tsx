"use client";
import { useGSAP } from "@gsap/react";
import gsap, {SplitText} from "gsap/all";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { about } from "./Data/aboutus";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Nosotras() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useGSAP(() => {
    const titleSplit = SplitText.create("#nosotras h1", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#nosotras",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
  });

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#nosotras",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        y: 100,
        x: 100,
      })
      .from("#c-right-leaf", {
        y: 100,
        x: -100,
      });
  });

  return (
    <section
      className="flex flex-col items-center px-8 h-full justify-center min-h-screen   "
      id="nosotras"
    >
      <div className="w-full px-8 overflow-none h-auto ">
        <div className="flex items-center justify-between gap-5 overflow-none px-4">
          <div>
            <h1 className="text-black font-normal text-2xl w-96 max-sm:text-xs ">
              Sobre Sociedad
            </h1>
            <h1 className="text-black text-3xl  font-extrabold w-96 max-sm:text-xs">
              Femenina 21 de Junio, Comalapa
            </h1>
          </div>
          <Image src="/logo.webp" alt="logo" width={90} height={90} />
        </div>
      </div>

      <div className="flex flex-row flex-wrap px-8">
        {about.map((sobrenosotras) => (
          <div key={sobrenosotras.id} className="w-1/2 px-2 p-0.5 ">
            <Accordion
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(99, 218, 172, 0.3)",
              }}
              expanded={expanded === String(sobrenosotras.id)}
              onChange={handleChange(String(sobrenosotras.id))}
            >
              <AccordionSummary
                expandIcon={
                  expanded === String(sobrenosotras.id) ? (
                    <RemoveIcon />
                  ) : (
                    <AddIcon />
                  )
                }
                aria-controls={`${sobrenosotras.id}-content`}
                id={`${sobrenosotras.id}-header`}
                sx={{
                  borderBottom: "2px solid #1d4116",
                  py: "0px",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    width: "60%",
                    flexShrink: 0,
                    color: "#1d4116",
                    fontWeight: "bold",
                  }}
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
      <Image
        id="c-right-leaf"
        src="/bglogo.webp"
        width={300}
        height={300}
        alt="Background Logo"
        className=" absolute left-0 -z-10  w-1/4  "
      />
      <Image
        id="c-left-leaf"
        src="/bglogo.webp"
        width={200}
        height={200}
        alt="Background Logo"
        className="absolute right-0 -z-10 "
      />
    </section>
  );
}
