import About from '@/components/Hero';
import Hero from '@/components/About';

import Skill from '@/components/Skill';
import Projects from '@/components/Project';
import Head from 'next/head';
import Footer from '@/components/Footer';

const Home = () => {
	return (
		<>
			<Head>
				<title>Joel's Portfolio</title>
				<meta name="description" content="Joel's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
      		<About />
			<Hero />
			<Skill />
      <Projects />
      <Footer/>
			</div>
		</>
	);
};

export default Home;