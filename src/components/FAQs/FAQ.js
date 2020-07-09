import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './FAQ.css';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        className={faq.show ? 'open' : ''}
        eventKey={index}
        onClick={() => toggleFAQ(index)}>
        {faq.question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>{faq.answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FAQ;
