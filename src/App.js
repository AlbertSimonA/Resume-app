import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Head from "./components/Head/Head";
import Home from "./components/Home/Home";
import PersonalDetails from "./components/Routes/PersonalDetails";
import Education from "./components/Routes/Education";
import Experience from "./components/Routes/Experience";
import Projects from "./components/Routes/Projects";
import About from "./components/Routes/About";
import Summary from "./components/Routes/Summary";
import Login from "./components/Login/Login";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <Head />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={PersonalDetails} />
        <Route path="/education" exact component={Education} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/summary" exact component={Summary} />
        <Route path="/summary" exact component={Summary} />
        <Route path="/signup" exact component={Login} />

        <Route path="/resume" exact component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
