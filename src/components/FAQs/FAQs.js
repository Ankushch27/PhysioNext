import React, { Component } from 'react';
import { faqs } from '../../data/FAQdata';
import FAQ from './FAQ';
import { Accordion } from 'react-bootstrap';

class FAQs extends Component {
  state = {
    faqs
  };

  render() {
    const toggleFAQ = index => {
      this.setState(
        this.state.faqs.map((faq, i) => {
          if (i === index) {
            faq.show = !faq.show;
          } else {
            faq.show = false;
          }
          return faq;
        })
      );
    };
    return (
      <div className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Accordion>
                {this.state.faqs.map((faq, i) => (
                  <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
