import {parseDate} from './dateHelper';
import {sortDrivenRouteByDate} from './sortHelper';

export const parseToCsvString = fullDrivenRoutes => {
  fullDrivenRoutes.sort((a, b) => sortDrivenRouteByDate(a.date, b.date));
  console.log(fullDrivenRoutes);

  let csvString = 'Datum, Start, Ziel, Entvernung,';
  let lastDate = 0;
  let distMonth = 0;
  let distAll = 0;

  fullDrivenRoutes.map(r => {
    console.log(r);
    if (r.date > lastDate) {
      const dateArray = parseDate(r.date).split('.');
      const lastDayArray = parseDate(lastDate).split('.');
      console.log(r);

      if (dateArray[1] > lastDayArray[1] || dateArray[2] > lastDayArray[2]) {
        csvString = csvString.concat(
          `\n${distMonth}Km,\n,\n${dateArray[1]}.${dateArray[2]},`,
        );
        distMonth = 0;
      }
      lastDate = r.date;
    }
    distMonth += r.dist;
    distAll += r.dist;
    csvString = csvString.concat(
      `\n${parseDate(r.date)}, ${r.start.name}, ${r.dest.name}, ${r.dist},`,
    );
  });
  console.log(distMonth);
  csvString = csvString.concat(`\n${distMonth}Km,\n,\ngestamt,\n${distAll}Km`);
  return csvString;
};
