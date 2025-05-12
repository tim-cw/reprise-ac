import ComponentFactory from './ComponentFactory';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    // Une petite chose à faire ici.
    //new ComponentFactory();
  }
}
new Main();
