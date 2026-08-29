import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-500 py-8 px-4 text-center text-sm font-medium border-t border-slate-200">
      <p>© {new Date().getFullYear()} OrdontoLab (ORTHODONTIC LABORATORY). All rights reserved.</p>
    </footer>
  );
}