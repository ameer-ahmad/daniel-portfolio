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
  const [name, setName] = useState('Daniel Shui');

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

  useEffect(() => {
    const chars = '*?><[]&@#)(.%$-_:/;?!'.split('');
    console.log(chars);
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
                onClick={makeFullscreen}
                className={
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
                }
              />
            );
          })}

          <div className="max-w-[300px] absolute bottom-[16px] left-[21px]">
            <p>{selectedProject.title}</p>
            <br />
            <p>{selectedProject.subPages[index].caption}</p>
            <br />
            <p>
              {index + 1}/{selectedProject.subPages.length}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="container px-[257px] flex gap-[256px] overflow-auto py-[100px] m-auto max-w-[fit-content]"
          onWheel={(e) => {
            if (e.deltaY > 0) {
              e.target.scrollLeft += 100;
            } else {
              e.target.scrollLeft -= 100;
            }
          }}
        >
          {data.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-[20px] min-w-[556px] cursor-pointer"
              onWheel={(e) => {
                const container =
                  document.getElementsByClassName('container')[0];
                if (e.deltaY > 0) {
                  container.scrollLeft += 100;
                } else {
                  container.scrollLeft -= 100;
                }
              }}
              onClick={openProject}
            >
              <img src={item.image} alt={item.title} className="w-full" />
            </div>
          ))}
        </div>
      )}
      {/* <div className="absolute w-full h-full bg-black top-0 left-0 text-white flex justify-center items-center">
        Daniel Shui
      </div> */}
    </div>
  );
}

export default App;
