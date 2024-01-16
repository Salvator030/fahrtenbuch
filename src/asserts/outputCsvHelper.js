import {parseDate} from './dateHelper';
import {sortDrivenRouteByDate} from './sortHelper';

export const parseToCsvString = (fullDrivenRoutes, printName, fullAddress) => {
  fullDrivenRoutes.sort((a, b) => sortDrivenRouteByDate(a.date, b.date));
  let csvString = '';
  if (printName) {
    if (fullAddress) {
      csvString =
        'Datum, Start, S.Straße, S.Hnr, S.Plz, S.Ort, Ziel, Z.Straße, Z.Hnr, Z.Plz, Z.Ort, Entfernung,';
    } else {
      csvString = 'Datum, Start, Ziel, Entvernung,';
    }
  } else if (fullAddress) {
    csvString =
      'Datum, S.Straße, S.Hnr, S.Plz, S.Ort, Z.Straße, Z.Hnr, Z.Plz, Z.Ort, Entfernung,';
  } else {
    csvString = 'Datum, Entfernung,';
  }
  let lastDate = 0;
  let distMonth = 0;
  let distAll = 0;

  fullDrivenRoutes.map(r => {
    if (r.date > lastDate) {
      const dateArray = parseDate(r.date).split('.');
      const lastDayArray = parseDate(lastDate).split('.');
      if (dateArray[1] > lastDayArray[1] || dateArray[2] > lastDayArray[2]) {
        if (lastDate !== 0) {
          csvString = csvString.concat(
            `\n${distMonth.toFixed(2)}Km,\n,\n${dateArray[1]}.${dateArray[2]},`,
          );
          distMonth = 0;
        } else {
          csvString = csvString.concat(`\n,\n${dateArray[1]}.${dateArray[2]},`);
        }
      }
      lastDate = r.date;
    }
    distMonth += r.dist;
    distAll += r.dist;
    if (printName) {
      if (fullAddress) {
        csvString = csvString.concat(
          `\n${parseDate(r.date)}, ${r.start.name},  ${r.start.street},  ${
            r.start.hnr
          },  ${r.start.plz},  ${r.start.place}, ${r.dest.name}, ${
            r.dest.street
          }, ${r.dest.hnr}, ${r.dest.plz}, ${r.dest.place}, ${r.dist},`,
        );
      } else {
        csvString = csvString.concat(
          `\n${parseDate(r.date)}, ${r.start.name}, ${r.dest.name}, ${r.dist},`,
        );
      }
    } else if (fullAddress) {
      csvString = csvString.concat(
        `\n${parseDate(r.date)}, ${r.start.street},  ${r.start.hnr},  ${
          r.start.plz
        },  ${r.start.place}, ${r.dest.street}, ${r.dest.hnr}, ${r.dest.plz}, ${
          r.dest.place
        }, ${r.dist},`,
      );
    } else {
      csvString = csvString.concat(`\n${parseDate(r.date)}, ${r.dist},`);
    }
  });
  csvString = csvString.concat(
    `\n${distMonth.toFixed(2)}Km,\n,\ngestamt,\n${distAll.toFixed(2)}Km`,
  );
  return csvString;
};
