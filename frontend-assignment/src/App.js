import './App.scss';
import Jobs from './components/jobs';
import Skills from './components/skills';
import Tabs from './components/Tabs'

function App() {
  return (
    <div>
      <h1>Front end Assignment</h1>
      <Tabs>
        <div label="Search Jobs By skills">
          <Jobs/>
        </div>
        <div label="Search skills By Jobs">
          <Skills/>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
