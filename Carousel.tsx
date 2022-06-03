import * as React from 'react';
import './Carousel.css';

interface ICarouselProps {
  scrollBehaviour?: ScrollBehavior;
}

const Carousel = ({
  children,
  scrollBehaviour = 'smooth',
}: React.PropsWithChildren<ICarouselProps>) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [currentItem, setCurrentItem] = React.useState(0);

  const wrappedElementCount = React.Children.count(children);

  const wrappedElements = React.Children.map(children, (child, index) => (
    <div className="carousel-item">{child}</div>
  ));

  const scrollIntoView = (itemIndex: number) => {
    containerRef.current.children.item(itemIndex)?.scrollIntoView({
      behavior: scrollBehaviour,
      inline: 'start',
    });
  };

  const updateIndex = (newIndex: number) => {
    setCurrentItem(newIndex);
    scrollIntoView(newIndex);
  };

  return (
    <React.Fragment>
      <div ref={containerRef} className="carousel">
        {wrappedElements}
      </div>
      <button
        onClick={() => {
          updateIndex(
            currentItem - 1 < 0 ? wrappedElementCount - 1 : currentItem - 1
          );
        }}
      >
        Go to back
      </button>
      <button
        onClick={() => {
          updateIndex(
            currentItem + 1 > wrappedElementCount - 1 ? 0 : currentItem + 1
          );
        }}
      >
        Go to next
      </button>
    </React.Fragment>
  );
};

export default Carousel;
