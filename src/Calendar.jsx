import Header from './Header'
import TableHead from './TableHead'
import Row from './Row'

export default function Calendar({ date }) { 
  const today = date.getDate(); 
  const startDate = new Date(date);

  startDate.setDate(1);

  const dayOfWeek = getDayOfWeek(startDate.getDay());

  startDate.setDate(1 - dayOfWeek);

  return (
   <>
    <Header date={date} />
    <table className="ui-datepicker-calendar">
      <TableHead />
      <tbody>
        <Row startDate={startDate} today={today} firstRow={true} />
        <Row startDate={startDate} today={today} />
        <Row startDate={startDate} today={today} />
        <Row startDate={startDate} today={today} />
        <Row startDate={startDate} today={today} lastRow={true} />
        <Row startDate={startDate} today={today} lastRow={true} />
      </tbody>      
    </table>
  </>
  );
}

function getDayOfWeek(week) {
  return week === 0 ? 6 : week - 1;
}