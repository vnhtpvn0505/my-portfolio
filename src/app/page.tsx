import About from '@/components/Hero';
import Hero from '@/components/About';

import Skill from '@/components/Skill';
import Projects from '@/components/Project';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience ';

const Home = () => {
	return (
		<>
		<Head>
			<title>Pi Portfolio</title>
			<meta name="description" content="Joel's Portfolio" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.jpeg" />
		</Head>
			<div className='container'>
      		<About />
			<Hero />
			<Skill />
			<Experience />
			<Projects />
      <Footer/>
			</div>
		</>
	);
};

export default Home;