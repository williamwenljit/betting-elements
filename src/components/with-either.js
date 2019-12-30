import React from 'react';

const withEither = (conditionalRender = () => false, EitherComponent) => (Component) => (props) => {
	return conditionalRender(props) ? <EitherComponent {...props} /> : <Component {...props} />;
}

export default withEither;
