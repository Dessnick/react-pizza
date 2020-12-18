import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="2" y="277" rx="0" ry="0" width="280" height="30" />
      <rect x="2" y="320" rx="6" ry="6" width="280" height="76" />
      <rect x="4" y="418" rx="6" ry="6" width="91" height="31" />
      <circle cx="138" cy="138" r="122" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
  );
}

export default LoadingBlock;
