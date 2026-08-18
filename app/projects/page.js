import ThemeController from '../../components/theme-controller';
import { LanguageProvider } from '../../components/language-context';
import AllProjectsContent from '../../components/all-projects-content';

export const metadata={title:'Tous les projets — Oussama EL AYOUCHI',description:'Découvrez l’ensemble des projets techniques et data de Oussama EL AYOUCHI.'};

export default function ProjectsPage(){return <LanguageProvider><main className="allProjectsPage"><ThemeController/><AllProjectsContent/></main></LanguageProvider>}
