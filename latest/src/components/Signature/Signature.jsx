import React from 'react';
import './signature.css';

function Signature({ title, children }) {
  return (
    <section className="signature-section">
      <div className="signature-header">
        <h2 className="signature-title">{title}</h2>
        <span className="signature-badge">Фирменное</span>
      </div>
      <div className="signature-divider"></div>
      {children}
    </section>
  );
}

export default Signature;