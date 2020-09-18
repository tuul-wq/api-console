import React from 'react';

import './repo-link.scss';

function RepoLink() {
  const href = 'https://gitlab.com/tuul_wq/api-console';

  return (
    <a className="repo-link" href={href} rel="noopener noreferrer" target="_blank">
      @tuul_wq
    </a>
  )
}

export default RepoLink;
