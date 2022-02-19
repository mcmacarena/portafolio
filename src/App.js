import Header from './components/header/header'
import { Element} from 'react-scroll';
import SectionPresentation from './components/sectionPresentation/sectionPresentation'
import SectionProjects from './components/sectionProjects/sectionProjects'
import SectionContact from './components/sectionContact/sectionContact';
import SectionAboutMe from './components/sectionAboutMe/sectionAboutMe';

function App() {

  return (
    <div className="App">
      <Header  />
      <SectionPresentation />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5a24a0" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,229.3C672,
        235,768,181,864,181.3C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,
        1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
      <Element name='sectionProject'>
        <SectionProjects />
      </Element>
      <Element name='sectionAboutMe'>
        <SectionAboutMe/>
      </Element>
      <Element name='sectionContact'>
        <SectionContact/>
      </Element>

    </div>
  );
}

export default App;
