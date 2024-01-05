export const parseToCsvString = (fullDrivenRoutes) => {
console.log(fullDrivenRoutes);
    let csvString = new String('Datum, Start, Ziel, Entvernung');
    fullDrivenRoutes.map(r => console.log(r),
        csvString = csvString.concat(`\n${r.date},`));
    return csvString;
} 