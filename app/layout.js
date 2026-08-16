import './globals.css';
import './details.css';
import './refinements.css';
import './alternance.css';
import './theme.css';
import './education-interests.css';
import './projects-media.css';
import './contact.css';

export const metadata = {
  title: 'Oussama EL AYOUCHI — Portfolio',
  description: 'Ingénieur systèmes embarqués & Safety en reconversion vers la Data Analyse.',
  icons: {
    icon: '/profile/favicon.png',
    shortcut: '/profile/favicon.png',
    apple: '/profile/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
