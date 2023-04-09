import Header from './Header'

export default function Calendar({ date }) {
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
   <Header day={day} week={week} month={month} year={year} />
  );
}