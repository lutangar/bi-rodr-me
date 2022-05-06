import * as React from 'react';
import { css } from '@emotion/react';
import breweriesFeatureCollection from '../data/breweriesFeatureCollection.json';
import githubLogo from '../images/GitHub-Mark-32px.png';
import Map from '../components/Map';

const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const padderStyles = {
  padding: 96,
  paddingBottom: 0,
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 375,
};
const headingAccentStyles = {
  color: '#ffca28',
};

const mainStyle = css`
  display: flex;
  flex: 1;
`;

const listStyles = css`
  display: grid;
  margin-bottom: 96px;
  padding-left: 40px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const titleStyle = {
  color: '#c79a00',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const linkStyle = {
  color: '#ffca28',
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const mapStyle = {
  width: '100%',
  height: '800px',
};

const IndexPage = () => {
  document.head.appendChild(
    Object.assign(document.createElement('link'), {
      rel: 'icon',
      href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👽</text></svg>",
    })
  );

  return (
    <div style={pageStyles}>
      <div style={padderStyles}>
        <title>La bièrodrôme</title>
        <h1 style={headingStyles}>
          La bièrodrôme
          <br />
          <span style={headingAccentStyles}>
            — Circuit de dégustation de bières des micro-brasseries de la Drôme... à vélo!{' '}
          </span>
          <span role="img" aria-label="Party popper emojis">
            🍺🚲
          </span>
        </h1>
      </div>
      <main css={mainStyle}>
        <Map style={mapStyle} />
      </main>
      <aside style={padderStyles}>
        <ul css={listStyles}>
          {breweriesFeatureCollection.features.map(({ properties }) => (
            <li key={`brewery-menu-item-${properties.name}`} style={{ ...listItemStyles, color: 'goldenrod' }}>
              <span>
                <h3 style={titleStyle}>{properties.name}</h3>
                <p style={descriptionStyle}>
                  {properties?.streetAddress} <br />
                  {properties?.postalCode} {properties?.addressLocality} <br />
                  <a style={linkStyle} href={`${properties?.website}`}>
                    {properties.website}
                  </a>
                </p>
              </span>
            </li>
          ))}
        </ul>
      </aside>
      <footer>
        <a style={linkStyle} href="https://github.com/lutangar/bierodrome">
          CC-BY-4.0
          <img alt="Github logo" src={githubLogo} />
        </a>
        2021
      </footer>
    </div>
  );
};

export default IndexPage;
