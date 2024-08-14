import React from "react";

const Contact = () => {
  return (
    <div className="border-b border-transparent pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me!</h1>
      <div className="text-center tracking tighter">
        <p className="my-4 text-neutral-400">503-741-1489</p>
        <a
          href="mailto:davisewingard@gmail.com"
          className="underline text-neutral-400"
        >
          davisewingard@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
