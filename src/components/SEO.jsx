import { Helmet } from 'react-helmet-async';
import { useResolvedPath } from 'react-router-dom';

const SEO = ({title, description}) => {

  const location = useResolvedPath();
  const name = 'SCRIPTO Medellín';
  const type = 'article';
  const titleLong = title + ' | SCRIPTO Medellín';
  return (
  <Helmet>
    { /* Standard metadata tags */ }
    <title>{titleLong}</title>
    <meta name='description' content={description} />
    { /* End standard metadata tags */ }
    { /* Facebook tags */ }
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={"https://jobs.scripto-m.de"+location.pathname} />
    { /* End Facebook tags */ }
    { /* Twitter tags */ }
    <meta name="twitter:creator" content={name} />
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    { /* End Twitter tags */ }
    { /* Canconial Tags */ }
    <link rel="canonical" href={"https://jobs.scripto-m.de"+location.pathname} />
    { /* End Canconial Tags */ }
  </Helmet>
  );
}
export default SEO;