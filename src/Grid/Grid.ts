/*
    The following class keeps track of the searchable area
    as defined by the user after entering the bound.

    This is intended to be used statically so that the
    bound data is accessible easily by all instances of
    the Rover class.
*/
class Grid {
  private static _xBound = 0;
  private static _yBound = 0;

  static defineUpperRightBound(x: number, y: number): void {
    this._xBound = x;
    this._yBound = y;
  }

  static get xBound(): number {
    return this._xBound;
  }

  static get yBound(): number {
    return this._yBound;
  }
}

export default Grid;
