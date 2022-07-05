import React from 'react';
import Directory from '../../components/directory/directory.component';
import CATEGORY_DATA from '../../categories-data.json';

const Home = () => {
	return <Directory categories={CATEGORY_DATA} />;
};

export default Home;
