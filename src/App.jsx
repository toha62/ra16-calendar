import Calendar from './Calendar';

function App() {
  // const now = new Date(2017, 2, 8);
  const now = new Date();


return (
  <div class="ui-datepicker">
    <Calendar date={now} />
  </div>
);
}

export default App
