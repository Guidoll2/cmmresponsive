
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <Head>
      <title>Título de tu página</title>
      <meta property="og:title" content="AlarmasCMM" />
      <meta property="og:description" content="Seguridad Electronica" />
      <meta property="og:image" content="https://www.alarmascmm.com/" />
      <meta property="og:url" content="https://www.alarmascmm.com/" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Header;