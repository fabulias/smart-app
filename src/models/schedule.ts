export class Schedule {
  public hour: string;
  public ration: number;
  public id: number;

  constructor(h: string, q: number) {
    this.hour = h;
    this.ration = q;
  }
}
