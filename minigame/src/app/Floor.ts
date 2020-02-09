import { IBox, Position, Box } from './models';

export class Floor implements IBox {
  public box: Box;
  public markedForCleanUp = false;

  constructor(private canvas: HTMLCanvasElement) {
    const h = 5;
    this.box = new Box('black', new Position(0, (this.canvas.height - h), this.canvas.width, h));
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.box.draw(ctx);
  }
}
