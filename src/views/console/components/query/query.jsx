import React from 'react';

import QueryInput from './query-input/query-input';
import Separator from './separator/separator';
import './query.scss';

function Query() {
  return (
    <div className="query">
      <QueryInput title="Запрос:"/>
      <Separator  />
      <QueryInput title="Ответ:"/>
    </div>
  )
}

export default Query;
