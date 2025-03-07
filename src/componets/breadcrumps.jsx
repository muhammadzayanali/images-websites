import React from "react";

const Breadcrumps = ({ b1, b2, link }) => {
    const bodyStyle = {
        fontFamily: '"Source Code Pro", monospace',
        fontStyle: "normal",
        fontWeight: 300,
        textTransform: "none",
        letterSpacing: "0em",
        lineHeight: "1.7em",
      };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2" style={bodyStyle}>
        <li>
          <a className="" href={link}>
            {b1}
          </a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            stroke="currentColor"
          >
            <text x="0" y="10" font-size="12" font-family="Source Code Pro" fill="black">
              &gt;
            </text>
          </svg>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {b2}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumps;
