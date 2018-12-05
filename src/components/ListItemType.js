import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ListItemType = props => {
  const { type: type = '', fields: fields = null } = props.itemType;

  return (
    <Fragment>
      {type === 'news' && (
        <div className="b-list-item-type">
          {fields.heading && <h2>{fields.heading}</h2>}
          {fields.publishDate && (
            <div className="b-list-item-type__date">{fields.publishDate}</div>
          )}
          {fields.lead && <p>{fields.lead}</p>}
          {fields.topic && <div>{fields.topic}</div>}
        </div>
      )}

      {type === 'conference' && (
        <div className="b-list-item-type">
          {fields.heading && <h2>{fields.heading}</h2>}
          {() => {
            if (fields.dateFrom && fields.dateTo) {
              return (
                <div className="b-list-item-type__date">
                  {fields.dateFrom} - {fields.dateTo}
                </div>
              );
            } else if (fields.dateFrom) {
              return (
                <div className="b-list-item-type__date">{fields.dateFrom}</div>
              );
            } else if (fields.dateTo) {
              return (
                <div className="b-list-item-type__date">{fields.dateTo}</div>
              );
            }
          }}
          {fields.registrationDeadline && (
            <div className="b-list-item-type__deadline">
              {fields.registrationDeadline}
            </div>
          )}
          {fields.publishDate && (
            <div className="b-list-item-type__address">
              {fields.publishDate}
            </div>
          )}
          {fields.topic && <div>{fields.topic}</div>}
        </div>
      )}

      {type === 'pressRelease' && (
        <div className="b-list-item-type">
          <div className="b-list-item-type__image">
            <img src={fields.image} alt={fields.heading} />
          </div>
          <div className="b-list-item-type__text">
            {fields.heading && <h2>{fields.heading}</h2>}
            {fields.category && (
              <div className="b-list-item-type__category">
                {fields.category}
              </div>
            )}
            {fields.publishDate && (
              <div className="b-list-item-type__date">{fields.publishDate}</div>
            )}
            {fields.topic && <div>{fields.topic}</div>}
          </div>
        </div>
      )}

      {type === 'grantFunding' && (
        <div className="b-list-item-type">
          {fields.heading && <h2>{fields.heading}</h2>}

          {fields.registrationDeadline && (
            <div className="b-list-item-type__deadline">
              {fields.registrationDeadline}
            </div>
          )}
          {fields.topic && <div>{fields.topic}</div>}
        </div>
      )}

      {type === 'person' && (
        <div className="b-list-item-type">
          {fields.name && <strong>{fields.name}</strong>}
          {fields.email && <a href="#">{fields.email}</a>}
          {fields.phoneNumber && <a href="#">{fields.phoneNumber}</a>}
          {fields.position && <div>{fields.position}</div>}
          {fields.department && <div>{fields.department}</div>}
          {fields.topic && <div>{fields.topic}</div>}
        </div>
      )}
    </Fragment>
  );
};

ListItemType.propTypes = {
  itemType: PropTypes.shape({
    type: PropTypes.oneOf([
      'news',
      'conference',
      'pressRelease',
      'grantFunding',
      'person'
    ]),
    fields: PropTypes.object
  }).isRequired
};

export default ListItemType;
