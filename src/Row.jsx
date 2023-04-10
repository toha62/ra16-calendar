export default function Row({ startDate, today, firstRow, lastRow }) {
  const dateOfWeek = [];
  
  for (let i = 0; i < 7; i++) {
    dateOfWeek.push(startDate.getDate());
    startDate.setDate(startDate.getDate() + 1)
  }
  if (dateOfWeek[0] < 9 && lastRow) {
    return;
  }
  return (    
    <tr>
      <td className={((dateOfWeek[0] > 6 && firstRow) || (dateOfWeek[0] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') + 
        (dateOfWeek[0] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[0]}</td>
      <td className={((dateOfWeek[1] > 6 && firstRow) || (dateOfWeek[1] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[1] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[1]}</td>
      <td className={((dateOfWeek[2] > 6 && firstRow) || (dateOfWeek[2] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[2] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[2]}</td>
      <td className={((dateOfWeek[3] > 6 && firstRow) || (dateOfWeek[3] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[3] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[3]}</td>
      <td className={((dateOfWeek[4] > 6 && firstRow) || (dateOfWeek[4] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[4] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[4]}</td>
      <td className={((dateOfWeek[5] > 6 && firstRow) || (dateOfWeek[5] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[5] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[5]}</td>
      <td className={((dateOfWeek[6] > 6 && firstRow) || (dateOfWeek[6] < 7 && lastRow) ? 'ui-datepicker-other-month' : '') +
        (dateOfWeek[6] === today ? 'ui-datepicker-today' : '')}>{dateOfWeek[6]}</td>
    </tr>       
  );
}

