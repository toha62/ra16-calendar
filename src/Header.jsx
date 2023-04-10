export default function Header({ date }) {
  const dayWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const monthName = [
    ['Январь', 'Января'],
    ['Февраль', 'Февраля'],
    ['Март', 'Марта'],
    ['Апрель', 'Апреля'],
    ['Май', 'Мая'],
    ['Июнь', 'Июня'],
    ['Июль', 'Июля'],
    ['Август', 'Августа'],
    ['Сентябрь', 'Сентября'],
    ['Октябрь', 'Октября'],
    ['Ноябрь', 'Ноября'],
    ['Декабрь', 'Декабря'],
  ];

  const year = date.getFullYear();
  const month = monthName[date.getMonth()];
  const week = dayWeek[date.getDay()];
  const day = date.getDate();
  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{week}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{month[1]}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month[0]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
    </>
  );
}