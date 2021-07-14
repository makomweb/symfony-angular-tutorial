import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts a string which provides sky information into an asset string
 * Usage:
 *   value | mySky
 * Example:
 *   {{ obj.sky | mySky }}
 *   formats to: './../assets/sunny.jpg'
*/
@Pipe({name: 'mySky'})
export class MySkyPipe implements PipeTransform {
    transform(value: string): string {
        switch (value)
        {
            case 'sunny': return './../assets/sunny.jpg';        
            case 'cloudy': return './../assets/clouds.jpg';        
            case 'water_drop': return './../assets/rain.jpg';
            default: throw Error('unknown value ' + value);
        }
    }
}