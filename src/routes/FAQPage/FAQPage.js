import React, { Component } from "react";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./FAQPage.css";

export default class FAQPage extends Component {
  render() {
    const questions = [
      {
        question: "What is a union?",
        answer: (
          <p>
            A labor union is an organization of workers united in a common goal
            to ensure fair working conditions and bring about social justice.
          </p>
        ),
      },
      {
        question: "Why should I join a union?",
        answer: (
          <p>
            A union provides many services for its members, including higher pay
            and better benefits. It allows workers to negotiate with their
            employer in matters such as wages, work hours, safety measures, and
            benefits like healthcare, sick leave, and vacation. Unions give
            their members a voice inside the industry where they might otherwise
            be ignored.
          </p>
        ),
      },
      {
        question: "Does it cost money to join a union?",
        answer: (
          <p>
            Unions are funded by member dues, typically around $50/month, but
            this can vary depending on the union, and is generally considered a
            fair trade-off.
          </p>
        ),
      },
      {
        question: "How does this app work?",
        answer: (
          <p>
            This app works by giving you the information on unions in your
            industry, making it easier to join and saving you time. You can look
            through our list of acredited unions or speed up the search by
            filtering based on industry or entering a word or phrase into the
            search bar.
          </p>
        ),
      },
      {
        question: `What if I can't find a union to fit my needs?`,
        answer: (
          <p>
            If you can't find a union,{" "}
            <a
              href="https://www.ueunion.org/org_steps.html"
              alt="a link to www.ueunion.org"
              target="blank"
            >
              here's a link to some resources for how to start your own.
            </a>
          </p>
        ),
      },
    ];

    return (
      <section className="faq-page">
        <SectionHeading
          className="faq-heading"
          text="Frequently Asked Questions"
        />
        <QuestionSection questions={questions} />
      </section>
    );
  }
}
