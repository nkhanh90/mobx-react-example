import { observable, action, computed } from 'mobx';

import BirdModel from 'models/BirdModel';

class BirdStore {
  birds = observable([]);

  addBird = action(bird => {
    this.birds.push(new BirdModel(bird));
  });

  birdCount = observable({
    get active() {
      return this.birds.length;
    },
  });
}

export default new BirdStore();
