import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts an object of type MyDateTime into a Date object
 * Usage:
 *   value | myDate
 * Example:
 *   {{ obj.myDateTime | myDate | date:'medium' }}
 *   formats to: 'Jun 15, 2015, 9:43:11 PM'
*/
@Pipe({name: 'myDate'})
export class MyDatePipe implements PipeTransform {
transform(value: MyDateTime): Date {
        return new Date(value.date + 'Z');
    }
}

interface MyDateTime {
    date: string;
    timezone_type: number;
    timezone: string;
}