import React from 'react';
import Link from './Link';

const Questionnaire = () => (
  <section className="b-questionnaire">
    <strong>Fant Du det du lette etter?</strong>
    <div className="b-questionnaire__options">
      <span className="t--green-warning">
        <Link buttonInherit small>
          Ja
        </Link>
      </span>
      <span className="t--red-warning">
        <Link buttonInherit small>
          Nei
        </Link>
      </span>
    </div>
  </section>
);

export default Questionnaire;
