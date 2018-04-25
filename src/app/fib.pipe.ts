import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'fib'
})
export class FibPipe implements PipeTransform {

  @memo()
  transform(value: number): any {
    return this.fibonacci(value);
  }
  @memo()
  private fibonacci(_num: number): number {
    if (_num === 1 || _num === 2) {
      return 1;
    }
    return this.fibonacci(_num - 1) + this.fibonacci(_num - 2);
  }

}
