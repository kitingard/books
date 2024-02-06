import { Pipe, PipeTransform } from '@angular/core';
import { ButtonTypes } from '../constants/button-types.enum';
import { ButtonSizes } from '../constants/button-size.enum';

@Pipe({
  name: 'buttonPipe',
  standalone: true,
})
export class ButtonPipe implements PipeTransform {
  transform(type: ButtonTypes, size: ButtonSizes): string {
    const types = {
      [ButtonTypes.PRIMARY]:
        'text-white bg-green-950 border border-gray-200 hover:bg-green-900',
      [ButtonTypes.SECONDARY]:
        'text-white bg-gray-700 border border-gray hover:bg-gray-600',
      [ButtonTypes.GHOST]:
        'text-green-950 border border-gray-400 hover:bg-neutral-100',
    };

    const sizes = {
      [ButtonSizes.FULL]: 'w-full h-full py-2 px-4',
      [ButtonSizes.SMALL]: 'py-1 px-3',
      [ButtonSizes.MIDDLE]: 'py-2 px-4 text-lg',
      [ButtonSizes.LARGE]: 'py-4 px-6 text-xl',
    };
    return `${types[type]} ${sizes[size]}`;
  }
}
