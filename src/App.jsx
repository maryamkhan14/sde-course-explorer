import "./App.css";
import CourseList from "./src/components/CourseList";
const App = () => {
  return (
    <div className="App">
      <h1>100 FREE, Quick Dev Crash Courses</h1>
      <h3>
        Got some free time? Check out these free courses on various web and
        software dev technologies. Pick up a new skill (or grow an existing one)
        in under 90 minutes!
      </h3>
      <CourseList />
    </div>
  );
};
export default App;
