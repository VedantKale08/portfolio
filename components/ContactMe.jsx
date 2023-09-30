import React from "react";

const ContactMe = () => {
  const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vedantkale8114@gmail.com`;
  return (
    <a target="_blank" href={composeUrl} className="border cursor-pointer border-white md:px-8 md:py-4 px-5 py-3 rounded-lg hover:opacity-80 transition md:text-base text-sm">
      Contact me
    </a>
  );
};

export default ContactMe;
