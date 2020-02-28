import { IBox, IMovable, Box, Position } from '../common/models';

import { Floor } from './Floor';

export class Enemy implements IBox, IMovable {

  public box: Box;
  public isOutOfSight = false;

  constructor(
    private canvas: HTMLCanvasElement,
    private floor: Floor,
    private difficulty: number
  ) {

    const height = 10 * difficulty;
    const width = 10 * difficulty;

    // inital pos
    this.box = new Box(
      'red',
      new Position(
        canvas.width - width,
        floor.box.pos.top - height,
        width,
        height
      )
    );
  }

  move() {

    this.box.pos.left -= 1.5;

    if (this.box.pos.left < 0) {
      this.isOutOfSight = true;
    }
  }


  draw(ctx: CanvasRenderingContext2D) {
    this.box.draw(ctx);
  }
}
