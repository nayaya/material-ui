import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24,
    },
  },
};

function CardContent(props) {
  const { classes, className, component: Component, ...other } = props;

  return <Component className={clsx(classes.root, className)} {...other} />;
}

CardContent.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,
};

CardContent.defaultProps = {
  component: 'div',
};

export default withStyles(styles, { name: 'MuiCardContent' })(CardContent);
