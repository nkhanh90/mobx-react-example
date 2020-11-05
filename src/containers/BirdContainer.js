import React from 'react';
import { inject, observer } from 'mobx-react';

import BirdList from 'components/BirdList';

const BirdView = ({ BirdStore: { birds, birdCount, addBird } }) => (
  <div>
    <h2>Birds</h2>
    {/* <BirdForm addBird={addBird} /> */}
    <br />
    <BirdList birds={birds} birdCount={birdCount} />
  </div>
);

export default inject('BirdStore')(observer(BirdView));
