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
  constructor() { }
}
