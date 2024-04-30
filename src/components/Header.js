import React from 'react';

const Header = ({ isWheel, setIsWheel, setIndex }) => {
  return (
    <div className="py-[25px]  text-[15px] leading-[22px] tracking-[-0.45px] px-[20px] flex justify-between m-auto">
      <div className="flex gap-[142px] z-10">
        <span
          className="cursor-pointer"
          onClick={() => {
            setIsWheel(false);
            setIndex(0);
          }}
        >
          Daniel Shui
        </span>
        {isWheel ? (
          <span>Scroll up/down</span>
        ) : (
          <span className="w-[453px]">
            Multidisciplinary designer experienced in branding, UI/UX,
            editorial, & more. Currently, he is in his thesis year at the
            Ontario College of Art and Design (OCADU) for graphic design. Has
            worked on projects for Chicago Bulls, Crypto.com Arena, Kansas City
            Royals, FC Barcelona, & many more.
            <br />
            <br />
            Daniel is currently based in Toronto and available for opportunities
            & collaborations, reach out!
          </span>
        )}
      </div>
      {isWheel ? null : (
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
          <li>
            <a href="/">Are.Na</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
