import * as React from 'react';
import BackgroundBox from './BackgroundBox';
import Carousel from './Carousel';

const App = () => (
  <React.Fragment>
    <h1>Carousel Demo</h1>
    <Carousel>
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
      <BackgroundBox />
    </Carousel>
  </React.Fragment>
);

export default App;
