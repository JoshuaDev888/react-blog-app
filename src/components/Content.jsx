import React from "react";

function Content({title, content, date, author}) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author} 
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
    </main>
  );
}

export default Content;