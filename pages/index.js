/* eslint-disable jsx-a11y/media-has-caption */
// import Head from 'next/head';
import GridGallery from '../components/gridGallery/GridGallery';
import Screen from '../components/screen/Screen';
import Sponsors from '../components/sponsors/Sponsors';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Video />
      <GridGallery />
      <Sponsors />
    </Screen>
  );
}
