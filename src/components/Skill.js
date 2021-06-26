import React from "react";

const Skill = () => {
  return (
    <section className="my-28  px-5">
      <header className="text-4xl font-bold pt-10 pb-3">
        <h2>Skills & Tools</h2>
      </header>
      <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="C++"
        >
          <img
            src="./images/icons/c.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          C++
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="ReactJS"
        >
          <img
            src="./images/icons/react.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          React JS
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Firebase"
        >
          <img
            src="./images/icons/firebase.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Firebase
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Flutter"
        >
          <img
            src="./images/icons/flutter.svg"
            alt=""
            loading="lazy"
            className="w-14 mb-2"
            width="64px"
            height="64px"
          />
          Flutter
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="MySQL"
        >
          <img
            src="./images/icons/mysql.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          My SQL
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Tensorflow"
        >
          <img
            src="./images/icons/tensorflow.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Tensorflow
        </div>
      </div>
    </section>
  );
};

export default Skill;
