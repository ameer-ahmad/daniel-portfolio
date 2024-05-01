import React from 'react';

const Header = ({ isWheel, setIsWheel, setIndex }) => {
  return (
    <div className="header py-[15px]  text-[15px] leading-[22px] tracking-[-0.45px] px-[20px] flex justify-between m-auto">
      <div className="flex gap-[142px] z-10">
        <span
          className="cursor-pointer hover:text-black highlight hover:font-bold"
          onClick={() => {
            setIsWheel(false);
            setIndex(0);
          }}
        >
          Daniel Shui
        </span>
        {isWheel ? (
          <span className="highlight">Scroll up/down</span>
        ) : (
          <span className="highlight w-[453px]">
            Multidisciplinary designer experienced in branding, UI/UX,
            editorial, & more. Currently, he is in his thesis year at the
            Ontario College of Art and Design (OCADU) for graphic design. Has
            worked on projects for Chicago Bulls, Crypto.com Arena, Kansas City
            Royals, FC Barcelona, & many more.
            <br className="highlight" />
            <br className="highlight" />
            Daniel is currently based in Toronto and available for opportunities
            & collaborations, reach out!
          </span>
        )}
      </div>
      {isWheel ? null : (
        <ul className="z-10 mr-[20px]">
          <li>
            <a className="hover:text-black highlight hover:font-bold" href="/">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:text-black highlight hover:font-bold" href="/">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-black highlight hover:font-bold" href="/">
              Are.na
            </a>
          </li>
          <li>
            <a className="hover:text-black highlight hover:font-bold" href="/">
              Email
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
