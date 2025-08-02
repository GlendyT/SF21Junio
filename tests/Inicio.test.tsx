/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Inicio from '../src/app/inicio/page';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockedImage(props: any) {
    return React.createElement('div', {
      ...props,
      role: 'img',
      'aria-label': props.alt,
      'data-src': props.src,
      'data-width': props.width,
      'data-height': props.height,
    });
  };
});

// Mock GSAP
jest.mock('gsap', () => ({
  registerPlugin: jest.fn(),
  set: jest.fn(),
  to: jest.fn(),
}));

jest.mock('gsap/ScrollTrigger', () => ({
  create: jest.fn(),
}));

jest.mock('@gsap/react', () => ({
  useGSAP: jest.fn((callback: () => void) => callback()),
}));

// Mock useRef
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => ({ current: null }),
}));

describe('Inicio Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main section with correct id', () => {
    render(<Inicio />);
    
    const section = document.querySelector('#inicio');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'inicio');
  });

  it('renders the hero titles', () => {
    render(<Inicio />);
    
    expect(screen.getByText('Sociedad Femenina')).toBeInTheDocument();
    expect(screen.getByText('21 de Junio')).toBeInTheDocument();
  });

  it('renders both logo images', () => {
    render(<Inicio />);
    
    expect(screen.getByLabelText('Background Logo')).toBeInTheDocument();
    expect(screen.getByLabelText('Main Logo')).toBeInTheDocument();
  });

  it('applies correct CSS classes to main section', () => {
    render(<Inicio />);
    
    const section = document.querySelector('#inicio');
    expect(section).toHaveClass('flex', 'items-center', 'justify-center', 'w-full', 'min-h-screen');
  });

  it('applies gradient background', () => {
    render(<Inicio />);
    
    const section = document.querySelector('#inicio');
    expect(section).toHaveClass('bg-gradient-to-b');
  });

  it('has proper structure with hero-key container', () => {
    render(<Inicio />);
    
    const heroKey = document.querySelector('#hero-key');
    expect(heroKey).toBeInTheDocument();
  });

  it('has hero-title container with correct classes', () => {
    render(<Inicio />);
    
    const heroTitle = document.querySelector('.hero-title');
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle).toHaveClass('w-1/2');
  });

  it('applies mobile responsive classes', () => {
    render(<Inicio />);
    
    const societyTitle = screen.getByText('Sociedad Femenina');
    const dateTitle = screen.getByText('21 de Junio');
    
    expect(societyTitle).toHaveClass('max-sm:text-2xl');
    expect(dateTitle).toHaveClass('max-sm:text-6xl');
  });

  it('renders without crashing', () => {
    expect(() => render(<Inicio />)).not.toThrow();
  });

  it('has main logo with correct id attribute', () => {
    render(<Inicio />);
    
    const mainLogo = screen.getByLabelText('Main Logo');
    expect(mainLogo).toHaveAttribute('id', 'hero-logo');
  });

  it('applies correct z-index layering', () => {
    render(<Inicio />);
    
    const bgLogo = screen.getByLabelText('Background Logo');
    const mainLogo = screen.getByLabelText('Main Logo');
    
    expect(bgLogo).toHaveClass('z-10');
    expect(mainLogo).toHaveClass('z-20');
  });

  it('uses correct text styling for titles', () => {
    render(<Inicio />);
    
    const societyTitle = screen.getByText('Sociedad Femenina');
    const dateTitle = screen.getByText('21 de Junio');
    
    expect(societyTitle).toHaveClass('text-5xl', 'font-semibold');
    expect(dateTitle).toHaveClass('text-[#1d4116]', 'text-8xl', 'font-extrabold');
  });

  it('applies correct layout classes to main container', () => {
    render(<Inicio />);
    
    const mainContainer = document.querySelector('.flex.flex-row');
    expect(mainContainer).toHaveClass('w-full', 'items-center', 'justify-center', 'gap-6');
  });

  it('positions background logo correctly', () => {
    render(<Inicio />);
    
    const bgLogo = screen.getByLabelText('Background Logo');
    expect(bgLogo).toHaveClass(
      'absolute',
      'top-1/2',
      'left-1/2',
      'transform',
      '-translate-x-1/2',
      '-translate-y-1/2'
    );
  });

  it('uses semantic heading elements', () => {
    render(<Inicio />);
    
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
    
    headings.forEach(heading => {
      expect(heading.tagName).toBe('H1');
    });
  });
});
