import "./styles.css";
import Calendar from "/components/Calendar";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Calendar</h1>
      <Calendar today={new Date()} />
    </div>
  );
}
