import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SquareImage from '../components/SquareImage';

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
          {fields.dateFrom && fields.dateTo ? (
            <div className="b-list-item-type__date">
              {fields.dateFrom} - {fields.dateTo}
            </div>
          ) : (
            <div className="b-list-item-type__date">{fields.dateTo}</div>
          )}

          {fields.registrationDeadline && (
            <div className="b-list-item-type__deadline">
              {fields.registrationDeadline}
            </div>
          )}
          {fields.topic && <div>{fields.topic}</div>}
        </div>
      )}

      {type === 'pressRelease' && (
        <div className="b-list-item-type">
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__image">
              <SquareImage src={fields.image} alt={fields.heading} />
            </div>
            <div className="b-list-item-type__text">
              {fields.heading && <h2>{fields.heading}</h2>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}
              {fields.publishDate && (
                <div className="b-list-item-type__date">
                  <strong>Publisert: </strong>
                  {fields.publishDate}
                </div>
              )}
              {fields.topic && <div>{fields.topic}</div>}
            </div>
          </div>
        </div>
      )}

      {type === 'grantFunding' && (
        <div className="b-list-item-type">
          {fields.heading && <h2>{fields.heading}</h2>}

          {fields.deadline && (
            <p className="b-list-item-type__deadline">{fields.deadline}</p>
          )}
          {fields.topic && (
            <div className="b-list-item-type__topic">{fields.topic}</div>
          )}
        </div>
      )}

      {type === 'person' && (
        <div className="b-list-item-type">
          {fields.name && <strong>{fields.name}</strong>}
          {fields.reverseEmail && fields.email && (
            <p>
              <a
                href={`mailto:${fields.email}`}
                className="b-list-item-type__email"
                aria-label={fields.email}
              >
                {fields.reverseEmail}
              </a>
            </p>
          )}
          {fields.phoneNumber && (
            <p>
              <a href={`tel:${fields.phoneNumber}`}>{fields.phoneNumber}</a>
            </p>
          )}
          {fields.position && (
            <div className="b-list-item-type__meta">
              <strong>Stilling: </strong>
              {fields.position}
            </div>
          )}
          {fields.department && (
            <div className="b-list-item-type__meta">
              <strong>Avdeling: </strong>
              {fields.department}
            </div>
          )}
          {fields.topic && (
            <div className="b-list-item-type__topic">{fields.topic}</div>
          )}
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
