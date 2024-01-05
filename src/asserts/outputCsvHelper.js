import { parseDate } from "./dateHelper";

export const parseToCsvString = (fullDrivenRoutes) => {
console.log(fullDrivenRoutes);
    let csvString = new String('Datum, Start, Ziel, Entvernung,');
    fullDrivenRoutes.map(r => {console.log(r);
        csvString = csvString.concat(`\n${parseDate(r.date)}, ${r.start.name}, ${r.dest.name}, ${r.dist},`)});
    return csvString;
} 