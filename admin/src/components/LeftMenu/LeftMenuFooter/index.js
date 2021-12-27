import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://talesvaladares.github.io/" target="_blank" rel="noopener noreferrer">
          Tales Eduardo
        </A>
      </div>
    </Wrapper>
  );
}
export default LeftMenuFooter;
