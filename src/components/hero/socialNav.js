import React from 'react';
import Twitter from '../../icons/twitter.svg';
import GooglePlay from '../../icons/googleplay.svg';
import Rss from '../../icons/rss.svg';
import Itunes from '../../icons/itunes.svg';
import Spotify from '../../icons/spotify.svg';

const iconData = [
  {
    name: 'Twitter',
    iconSvg: Twitter,
    url: 'https://twitter.com/Tech4humansio',
  },
  {
    name: 'Google Play',
    iconSvg: GooglePlay,
    url: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2I1YjAxOC9wb2RjYXN0L3Jzcw==',
  },
  {
    name: 'Spotify',
    iconSvg: Spotify,
    url: 'https://open.spotify.com/show/3jiFb3y73lcuE2x094IRAo',
  },
  {
    name: 'Apple Podcast',
    iconSvg: Itunes,
    url: 'https://podcasts.apple.com/us/podcast/tech4humans/id1505436313',
  },
  {
    name: 'Rss',
    iconSvg: Rss,
    url: 'https://anchor.fm/s/13b5b018/podcast/rss',
  }
];


const SocialNav = ({ Styles }) => {
  return (
    <>
      <h3 className={Styles.header}>Creating a positive impact on humanity</h3>
      <nav className={Styles.nav}>
        {iconData.map(icon =>
          <a href={icon.url} className={Styles.icon}>
            <icon.iconSvg className={Styles.iconImage} />
          </a>)}
      </nav>
    </>
  )
}

export default SocialNav;