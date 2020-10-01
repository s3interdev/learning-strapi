import React from 'react';

const About = () => {
	return (
		<div className='container'>
			<div className='columns mx-4 my-4'>
				<div className='column'>
					<div className='box has-text-centered'>
						<h1 className='title is-3'>About BlogCards</h1>
						<p className='subtitle'>Picture viewing sample application</p>
						<p className='subtitle'>
							<strong>Version : </strong>1.0.0
						</p>
						<div className='content'>
							<p>
								<strong>Bulma</strong> is a free, open source CSS framework based on Flexbox and used by more than 200,000 developers.
							</p>
							<p>
								<strong>React</strong> is a JavaScript library for building user interfaces.
							</p>
							<p>
								<strong>Strapi</strong> is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
