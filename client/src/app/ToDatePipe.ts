import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts an object of type MyDateTime into a Date object
 * Usage:
 *   value | myDate
 * Example:
 *   {{ obj.myDateTime | myDate }}
 *   formats to: blablabla
*/
@Pipe({name: 'myDate'})
export class ToDatePipe implements PipeTransform {
transform(value: any): Date {
        return new Date(value.date + 'Z');
    }
}

interface MyDateTime {
    date: string;
    timezone_type: number;
    timezone: string;
}