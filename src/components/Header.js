import React from 'react';

const Header = ({ isWheel, setIsWheel, setIndex }) => {
  return (
    <div className="header py-[15px]  text-[16px] leading-[22px] tracking-[-0.45px] px-[20px] flex justify-between m-auto">
      <div className="flex gap-[142px] z-10 items-start mobile-header">
        <span
          className="link cursor-pointer hover:text-black highlight hover-text"
          onClick={() => {
            setIsWheel(false);
            setIndex(0);
          }}
        >
          Daniel Shui
        </span>
        {isWheel ? (
          <span className="highlight hide">Scroll up/down</span>
        ) : (
          <span className="highlight w-[453px] hide">
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
        <p className="hidden mobile highlight">Swipe left/right</p>
      </div>
      {isWheel ? null : (
        <span className="highlight max-w-[453px] hidden mobile">
          Multidisciplinary designer experienced in branding, UI/UX, editorial,
          & more. Currently, he is in his thesis year at the Ontario College of
          Art and Design (OCADU) for graphic design. Has worked on projects for
          Chicago Bulls, Crypto.com Arena, Kansas City Royals, FC Barcelona, &
          many more.
          <br className="highlight" />
          <br className="highlight" />
          Daniel is currently based in Toronto and available for opportunities &
          collaborations, reach out!
        </span>
      )}

      {isWheel ? null : (
        <ul className="z-10 mr-[20px]">
          <li>
            <a
              className="hover:text-black highlight hover-text link"
              href="https://www.instagram.com/daniel.shui/"
              target="_blank"
              rel="noreferrer"
            >
              →Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:text-black highlight hover-text link"
              href="https://www.linkedin.com/in/danielshui/"
              target="_blank"
              rel="noreferrer"
            >
              →LinkedIn
            </a>
          </li>
          <li>
            <a
              className="hover:text-black highlight hover-text link"
              href="https://www.are.na/daniel-shui-40niceg9sse/channels"
              target="_blank"
              rel="noreferrer"
            >
              →Are.na
            </a>
          </li>
          <li>
            <a
              className="hover:text-black highlight hover-text link"
              href="mailto:danielshui.des@gmail.com"
            >
              →Email
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
