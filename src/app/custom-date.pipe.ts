import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

    transform(date: Date, format?: string): string {
        if (format) {
            return this.formatDate(date, format);
        }

        return date.toTimeString();
    }

    formatDate(date: Date, format: string): string {
        let yyyy: string = date.getFullYear().toString();        
        let yy = yyyy.slice(1);
        let M = date.getMonth()+1;
        let MM = M < 10 ? '0' + M : M;
        let d = date.getDate();
        let dd = d < 10 ? '0' + d : d;
        let h = date.getHours();
        let hh = h < 10 ? '0' + h : h;
        let m = date.getMinutes();
        let mm = m < 10 ? '0' + m : m;
        let s = date.getSeconds();
        let ss = s < 10 ? '0' + s : s;

        format = format.replace(/yyyy/i, yyyy);
        format = format.replace(/yy/i, yy);
        format = format.replace(/MM/, MM.toString());
        format = format.replace(/M/, M.toString());
        format = format.replace(/dd/i, dd.toString());
        format = format.replace(/d/i, d.toString());
        format = format.replace(/hh/i, hh.toString());
        format = format.replace(/h/i, h.toString());
        format = format.replace(/mm/, mm.toString());
        format = format.replace(/m/, m.toString());
        format = format.replace(/ss/i, ss.toString());
        format = format.replace(/s/i, s.toString());
        
        return format;
    }
}
