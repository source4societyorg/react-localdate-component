import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const renderLocalDate = (timestamp, format, toTimezone) => (
    toTimezone === null ? moment.unix(timestamp).format(format) : moment.tz(timestamp, toTimezone).format(format)
);

const LocalDate = ({id: id, className: className, format: format, timestamp: timestamp, toTimezone: toTimezone}) => (
    <span class={'localdate ' + className + ' ' + id}>
        {renderLocalDate(timestamp, format, toTimezone)}
    </span>
)

LocalDate.defaultProps = {
  id: '',
  className: '',
  timestamp: moment.unix(),
  format: 'MM/DD/YYYY', 
  toTimezone: null,
};

LocalDate.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  timestamp: PropTypes.number,
  format: PropTypes.string,
  toTimezone: PropTypes.oneOf([PropTypes.string, PropTypes.null]),
};

export default LocalDate;
