import React, { Component } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./AboutPage.css";

export default class AboutPage extends Component {
  render() {
    return (
      <section className="about-page">
        <SectionHeading className="about-heading" text="What is Unionize?" />
        <div className="about-msg">
          <p>
            Unionize is an app designed to put you in touch with unions that
            serve your industry. We believe that every worker has the right to
            unionize and that no employer should be given absolute power over
            their employees, which is why Unionize makes it easy to find and
            join a union.
            <br />
            <br />
            Navigate to the 'Find a Union' page and enter in your search
            parameters to filter through our list of unions operating in the
            United States. You can filter by industry or try entering in words
            in our search bar to see if anything turns up!
          </p>
        </div>
      </section>
    );
  }
}
