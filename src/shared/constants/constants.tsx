import { RegisterOptions } from 'react-hook-form';
import { LinkedIn, Github, Instagram, Medium, Twitter } from '@/assets/Icons';

const REQUIRED_TEXT = 'Este campo es requerido';

export const namesField: RegisterOptions = {
  required: REQUIRED_TEXT,
};

export const emailField: RegisterOptions = {
  required: REQUIRED_TEXT,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Email inválido',
  },
};

export const routerFooter = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/geamdev',
    icon: <Twitter />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/geam/',
    icon: <LinkedIn />,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/geamdev',
    icon: <Github />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/geamparker/',
    icon: <Instagram />,
  },
  {
    title: 'Medium',
    href: 'https://dev.to/geampiere',
    icon: <Medium />,
  },
];
