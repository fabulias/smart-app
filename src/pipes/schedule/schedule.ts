import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SchedulePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'scheduleP',
})
export class SchedulePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    return value * 2;
  }
}
