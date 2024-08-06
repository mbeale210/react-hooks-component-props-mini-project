import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const getReadingTimeIndicator = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(minutes / 10);
      return "🍱".repeat(boxes);
    }
  };

  const readingTimeIndicator = getReadingTimeIndicator(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>
        {readingTimeIndicator} {minutes} min read
      </small>
    </article>
  );
};

export default Article;
