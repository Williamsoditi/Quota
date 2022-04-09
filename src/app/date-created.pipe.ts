import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreated'
})
export class DateCreatedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
