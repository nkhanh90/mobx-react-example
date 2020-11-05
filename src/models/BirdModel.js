import { observable } from 'mobx';

class Bird {
  id = observable(0);
  name = observable(0);
  color = observable(0);

  constructor(bird) {
    this.id = Date.now();
    this.name = bird.name;
    this.color = bird.color;
  }
}

export default Bird;
