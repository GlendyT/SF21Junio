"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className=" text-white p-3 min-h-screen bg-gradient-to-b from-[#1bb092] to-[#9a430a] via-[#da6c13]">
      <h1 className='p-5 text-black text-3xl font-medium'>  Sobre Sociedad Femenina 21 de Junio, Comalapa</h1> 
      <Accordion sx={{background: 'transparent'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
           expandIcon={
             expanded === 'panel1'
            ? <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>−</span>
            : <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</span>
           }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{background: 'transparent'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
             expandIcon={
             expanded === 'panel2'
            ? <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>−</span>
            : <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</span>
           }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Users
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background: 'transparent'}}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
             expandIcon={
             expanded === 'panel3'
            ? <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>−</span>
            : <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</span>
           }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background: 'transparent'}}  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
             expandIcon={
             expanded === 'panel4'
            ? <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>−</span>
            : <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</span>
           }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
