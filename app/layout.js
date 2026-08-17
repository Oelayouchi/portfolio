import './globals.css';
import './details.css';
import './refinements.css';
import './alternance.css';
import './theme.css';
import './education-interests.css';
import './projects-media.css';
import './contact.css';
import './companies-strip.css';
import './navigation-cleanup.css';
import './hero-tweaks.css';
import './mobile-navigation.css';
import './home-hero.css';
import './awards.css';

export const metadata = {
  title: 'Oussama EL AYOUCHI — Portfolio',
  description: 'Ingénieur systèmes embarqués & Safety en reconversion vers la Data Analyse.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/profile/favicon.png',
    shortcut: '/profile/favicon.png',
    apple: '/profile/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}
