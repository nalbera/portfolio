import { makeStyles } from "@material-ui/core";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <About title="Sobre Mi" id="about" dark={true} />
      <Skills title="Skills" id="skills" dark={false}/>
      <MyWork title="Mis Proyectos" id="mywork" dark={true}/>
      <Contact title="Contacto" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  
})
export default App;
