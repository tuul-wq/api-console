import React from 'react';

import QueryInput from './query-input/query-input';
import Separator from './separator/separator';
import './query.scss';

function Query() {
  return (
    <div className="query">
      <QueryInput id="first" title="Запрос:"/>
      <Separator  />
      <QueryInput id="second" title="Ответ:"/>
    </div>
  )
}

export default Query;
