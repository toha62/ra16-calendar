export default function Header({ day, week, month, year }) {
  return (
    <>
      <div class="ui-datepicker-material-header">
        <div class="ui-datepicker-material-day">{week}</div>
        <div class="ui-datepicker-material-date">
          <div class="ui-datepicker-material-day-num">{day}</div>
          <div class="ui-datepicker-material-month">{month[1]}</div>
          <div class="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div class="ui-datepicker-header">
        <div class="ui-datepicker-title">
          <span class="ui-datepicker-month">{month[0]}</span>&nbsp;<span class="ui-datepicker-year">{year}</span>
        </div>
      </div>
    </>
  );
}