import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

export default withStyles({
  word: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
})(({ children, classes, className }) => (
  <React.Fragment>{children.map((word, i, arr) => (
    <React.Fragment key={i}>
      <span className={classnames(classes.word, className)}>{word}</span>{i !== (arr.length - 1) && <wbr />}
    </React.Fragment>
  ))}</React.Fragment>
));
