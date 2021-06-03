import './App.scss';
import Jobs from './components/jobs';
import Skills from './components/skills';
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="main-box">
      <h1>Front end Assignment</h1>
      <Tabs>
        <div label="Search skills">
          <Skills/>
        </div>
        <div label="Search Jobs">
          <Jobs/>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
