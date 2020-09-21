import React from 'react';
import PropTypes from 'prop-types';

import './history-track.scss';

function HistoryTrack({ title, success }) {
  const titleClasses = `history-track__title ${success ? 'success' : 'failure'}`
  const showMoreActions = () => {

  }

  return (
    <div className="history-track">
      <span className={titleClasses}>{title}</span>
      <button className="history-track__action" type="button" onClick={showMoreActions} />
    </div>
  )
}
// TODO: add "скопировано"

HistoryTrack.propTypes = {
  title: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default HistoryTrack;
