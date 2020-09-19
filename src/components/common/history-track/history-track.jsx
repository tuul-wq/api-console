import React from 'react';
import PropTypes from 'prop-types';

import './history-track.scss';

function HistoryTrack({ title, success }) {
  const titleClasses = `history-track__title ${success ? 'success' : 'failure'}`

  return (
    <div className="history-track">
      <span className={titleClasses}>{title}</span>
      <span className="history-track__action">btn</span>
    </div>
  )
}
// TODO: add "скопировано"

HistoryTrack.propTypes = {
  title: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default HistoryTrack;
