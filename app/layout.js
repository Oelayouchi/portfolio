import './globals.css';
import './details.css';
import './refinements.css';
import './alternance.css';
import './theme.css';

export const metadata = {
  title: 'Oussama EL AYOUCHI — Portfolio',
  description: 'Ingénieur systèmes embarqués & Safety en reconversion vers la Data Analyse.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
