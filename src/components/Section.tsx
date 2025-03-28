import React from 'react';
import './Section.css';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <section className={`section ${className || ''}`}>{children}</section>;
};

export default Section;
