import Calendar from './Calendar';

function App() {
  const now = new Date(2017, 2, 8);
  // const now = new Date(2017, 0, 8);
  // const now = new Date(2021, 1, 8);
  // const now = new Date();


return (
  <div className="ui-datepicker">
    <Calendar date={now} />
  </div>
);
}

export default App
