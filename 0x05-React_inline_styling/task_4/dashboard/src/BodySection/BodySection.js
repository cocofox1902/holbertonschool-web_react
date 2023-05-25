import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    margin: '20px 0',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
});

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={css(styles.bodySection)}>
        <h2 className={css(styles.title)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;
