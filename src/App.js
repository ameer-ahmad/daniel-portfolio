import { useState, useEffect } from 'react';

import Header from './components/Header';
import './index.css';
import data from './data';

function App() {
  const [isWheel, setIsWheel] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mainImage, setMainImage] = useState({});
  const [prevImage, setPrevImage] = useState({});
  const [nextImage, setNextImage] = useState({});
  const [fullScreen, setFullScreen] = useState(null);
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('Loading...');
  const [loadingColour, setLoadingColour] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      setMainImage(selectedProject.subPages[index]);
      if (index === selectedProject.subPages.length - 1) {
        setNextImage(null);
      } else {
        setNextImage(selectedProject.subPages[index + 1]);
      }
      if (index === 0) {
        setPrevImage(null);
      } else {
        setPrevImage(selectedProject.subPages[index - 1]);
      }
    }
  }, [selectedProject, index]);

  const scrambleLoading = () => {
    const chars = '*?><[]&@#)(.%$-_:/;?!'.split('');
    const daniel = 'Daniel Shui'.split('');
    const text = name.split('');
    let count = 0;
    setTimeout(() => {
      const scramble = setInterval(() => {
        if (count > 10) {
          for (let i = 0; i <= 10; i++) {
            text[i] = chars[Math.floor(Math.random() * chars.length)];
          }
        } else {
          for (let i = 0; i <= count; i++) {
            text[i] = chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setName(text.join(''));
        count++;

        if (count === 33) {
          count = 0;
          const unscramble = setInterval(() => {
            for (let i = 0; i < daniel.length; i++) {
              if (i <= count) {
                text[i] = daniel[i];
              } else {
                text[i] = chars[Math.floor(Math.random() * chars.length)];
              }
            }
            setName(text.join(''));
            setLoadingColour(count + 1);
            count++;
            if (count >= daniel.length) {
              clearInterval(unscramble);
            }
          }, 100);
          clearInterval(scramble);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      }, 100);
    }, 1000);
  };

  useEffect(() => {
    scrambleLoading();
  }, []);

  const openProject = (e) => {
    setIsWheel(true);
    const index = Array.from(e.target.parentNode.parentNode.children).indexOf(
      e.target.parentNode,
    );
    setSelectedProject(data[index]);
  };

  const makeFullscreen = (e) => {
    setFullScreen(
      selectedProject.subPages[e.target.getAttribute('data-index')],
    );
  };

  const scrollProjects = (e) => {
    if (!isScrolling) {
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (index !== selectedProject.subPages.length - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setIndex(0);
        }
      } else {
        if (index !== 0) {
          setIndex((prev) => prev - 1);
        } else {
          setIndex(selectedProject.subPages.length - 1);
        }
      }
      setTimeout(function () {
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <div className="App font-serif overflow-x-hidden">
      <Header isWheel={isWheel} setIsWheel={setIsWheel} setIndex={setIndex} />
      {isWheel ? (
        <div
          onWheel={scrollProjects}
          className="absolute w-[100vw] h-[100vh] top-0"
        >
          {selectedProject.subPages.map((project, i) => {
            return (
              <img
                src={project.image}
                alt={project.caption}
                key={i}
                data-index={i}
                className={`highlight ${project.vertical ? 'vertical' : ''} ${
                  project === fullScreen
                    ? 'fullscreen'
                    : project === mainImage
                    ? 'main'
                    : project === prevImage
                    ? 'prev'
                    : project === nextImage
                    ? 'next'
                    : i < index
                    ? 'top'
                    : 'bottom'
                }`}
              />
            );
          })}

          <div className="max-w-[300px] absolute bottom-[16px] left-[21px]">
            <p className="highlight light">
              {selectedProject.subPages[index].caption}
            </p>

            <br className="highlight" />
            <p className="highlight ">{selectedProject.title}</p>
            <br className="highlight" />
            <p className="highlight light">
              {index + 1}/{selectedProject.subPages.length}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="absolute bottom-0 container px-[257px] items-end flex gap-[356px] overflow-auto pt-[100px] pb-[15px] m-auto max-w-[fit-content]"
          onWheel={(e) => {
            if (e.deltaY > 0) {
              let scrollAmount = 0;
              let slideTimer = setInterval(function () {
                e.target.scrollLeft += 10;
                scrollAmount += 10;
                if (scrollAmount >= 100) {
                  window.clearInterval(slideTimer);
                }
              }, 25);
            } else {
              let scrollAmount = 0;
              let slideTimer = setInterval(function () {
                e.target.scrollLeft -= 10;
                scrollAmount += 10;
                if (scrollAmount >= 100) {
                  window.clearInterval(slideTimer);
                }
              }, 25);
            }
          }}
        >
          {data.map((item, index) => (
            <div
              key={item.id}
              className="project flex gap-[20px] min-w-[656px] cursor-pointer"
              onWheel={(e) => {
                if (e.deltaY > 0) {
                  let scrollAmount = 0;
                  let slideTimer = setInterval(function () {
                    const container =
                      document.getElementsByClassName('container')[0];
                    container.scrollLeft += 10;
                    scrollAmount += 10;
                    if (scrollAmount >= 100) {
                      window.clearInterval(slideTimer);
                    }
                  }, 25);
                } else {
                  let scrollAmount = 0;
                  let slideTimer = setInterval(function () {
                    const container =
                      document.getElementsByClassName('container')[0];
                    container.scrollLeft -= 10;
                    scrollAmount += 10;
                    if (scrollAmount >= 100) {
                      window.clearInterval(slideTimer);
                    }
                  }, 25);
                }
              }}
              onClick={openProject}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full highlight"
              />
            </div>
          ))}
        </div>
      )}
      <div
        onLoad={scrambleLoading}
        className={`highlight absolute w-full h-full bg-black left-0 text-white flex justify-center items-center ${
          isLoading ? 'loading' : 'done-loading'
        }`}
      >
        <span className="text-[#39FF14]">
          {name.split('').slice(0, loadingColour).join('')}
        </span>
        {name.split('').slice(loadingColour).join('')}
      </div>
    </div>
  );
}

export default App;
