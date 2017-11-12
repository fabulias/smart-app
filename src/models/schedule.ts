export class Schedule {
  public hour: string;
  public ration: number;
  public id: number;

  constructor(h: string, q: number) {
    this.hour = h;
    this.ration = q;
  }
}

export class scheduleService {
  public ration1: number;
  public date1: string;
  public ration2: number;
  public date2: string;
  public ration3: number;
  public date3: string;
  public ration4: number;
  public date4: string;
  constructor(r1: number, r2: number, r3: number, r4: number,
    d1: string, d2: string, d3: string, d4: string) {
    this.ration1 = r1;
    this.ration2 = r2;
    this.ration3 = r3;
    this.ration4 = r4;
    this.date1 = d1;
    this.date2 = d2;
    this.date3 = d3;
    this.date4 = d4;
  }
}
