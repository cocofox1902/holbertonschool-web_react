import React, { PureComponent, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    let { id, type, value, html, markAsRead } = this.props;

    return (
      <Fragment>
        {html !== undefined && (
          <li
            onClick={() => markAsRead(id)}
            className={css(type === 'urgent' ? styles.urgent : styles.default)}
            dangerouslySetInnerHTML={html}
          />
        )}
        {html === undefined && (
          <li
            onClick={() => markAsRead(id)}
            className={css(type === 'urgent' ? styles.urgent : styles.default)}
          >
            {value}
          </li>
        )}
      </Fragment>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
