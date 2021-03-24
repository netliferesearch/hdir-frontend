import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SquareImage from '../components/SquareImage';
import Collapsible from '../components/Collapsible';

const ListItemType = props => {
  const { 
    type: type = '', 
    fields: fields = null, 
  } = props.itemType;

  return (
    <>
      {type === 'news' && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type--no-arrow': fields.download
          })}
        >
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}
              {fields.publishDate && (
                <div className="b-list-item-type__date">
                  {fields.publishDate}
                </div>
              )}
              {fields.lead && (
                <p className="b-list-item-type__lead">{fields.lead}</p>
              )}
              {fields.topic && (
                <div className="b-list-item-type__topic">{fields.topic}</div>
              )}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
          </div>
        </div>
      )}

      {type === 'conference' && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type--no-arrow': fields.download
          })}
        >
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}
              {fields.dateFrom && fields.dateTo ? (
                <p className="b-list-item-type__date">
                  {fields.dateFrom} - {fields.dateTo}
                </p>
              ) : (
                <p className="b-list-item-type__date">{fields.dateTo}</p>
              )}
              {fields.lead && (
                <p className="b-list-item-type__lead">{fields.lead}</p>
              )}
              {fields.registrationDeadline && (
                <p className="b-list-item-type__deadline">
                  <strong>Påmeldingsfrist: </strong>
                  {fields.registrationDeadline}
                </p>
              )}
              {fields.location && (
                <div className="b-list-item-type__meta">
                  <strong>By/region: </strong>
                  {fields.location}
                </div>
              )}
              {fields.topic && (
                <div className="b-list-item-type__topic">{fields.topic}</div>
              )}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
          </div>
        </div>
      )}

      {type === 'pressRelease' && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type--no-arrow': fields.download
          })}
        >
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__image">
              <SquareImage src={fields.image} alt={fields.heading} />
            </div>
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}
              {fields.publishDate && (
                <div className="b-list-item-type__date">
                  <span>Sist faglig oppdatert: </span>
                  {fields.publishDate}
                </div>
              )}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
          </div>
          {fields.topic && (
            <div className="b-list-item-type__topic">{fields.topic}</div>
          )}
        </div>
      )}

      {type === 'grantFunding' && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type--no-arrow': fields.download
          })}
        >
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}

              {fields.deadline && (
                <p className="b-list-item-type__deadline">{fields.deadline}</p>
              )}
              {fields.topic && (
                <div className="b-list-item-type__topic">{fields.topic}</div>
              )}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
          </div>
        </div>
      )}

      {type === 'generic' && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type--no-arrow': fields.download || fields.openPdf,
          })}
        >
          <div className="b-list-item-type__flex-wrapper">
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
              {fields.category && (
                <p className="b-list-item-type__category">{fields.category}</p>
              )}

              {fields.subheading && (
                <div className="b-list-item-type__subheading">
                  {Array.isArray(fields.subheading) ? (
                    fields.subheading.map(text => <span>{text}</span>)
                  ) : (
                    <span>{fields.subheading}</span>
                  )}
                </div>
              )}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
            {fields.openPdf && (
              <div className="b-list-item-type__download b-list-item-type__download--open" aria-label="Åpne PDF">PDF</div>
            )}
          </div>
          {fields.topic && (
            <div className="b-list-item-type__topic">{fields.topic}</div>
          )}
          {fields.tags && (
            <div className="b-tags">
              { fields.tags.map(tag => (
                  <div className="b-tags__item">{tag.label}</div>
                )
              )}
            </div>
          )}
        </div>
      )}

      {(type === 'tilskudd' || type === 'grant') && (
        <div
          className={classNames({
            'b-list-item-type': true,
            'b-list-item-type__flex-wrapper': true,
            'b-list-item-type--no-arrow': fields.download || fields.openPdf,
          })}
        >
          <div className={`b-list-item-type__date-circle ${fields.expired && 'b-list-item-type__date-circle--expired'} ${fields.generic && 'b-list-item-type__date-circle--generic'}`}>
            <span className="b-list-item-type__date-big">{fields.frist && fields.frist.day && fields.frist.day}</span>
            {fields.frist && fields.frist.month ? fields.frist.month : 'Løpende'}
          </div>
          <div className="">
            <div className="b-list-item-type__text">
              {fields.heading && <h3>{fields.heading}</h3>}
            </div>
            {fields.download && (
              <div className="b-list-item-type__download" aria-label="Last ned PDF">PDF</div>
            )}
            {fields.openPdf && (
              <div className="b-list-item-type__download b-list-item-type__download--open" aria-label="Åpne PDF">PDF</div>
            )}
            {fields.tags && (
              <div className="b-tags">
                { fields.tags.map(tag => (
                    <div className="b-tags__item">{tag.label}</div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {type === 'archive' && (
        <div
          className={classNames({
            'b-list-item-type': true,
          })}
        >
          <div className="b-list-item">
            <div className="b-list-item-type__text">
              {fields.download && (
                <a href="#pdf" className="b-list-item-type__download b-list-item-type--float b-list-item-type--link" aria-label="Last ned PDF">PDF</a>
              )}
              {fields.heading && 
                <h3>{fields.heading} { fields.current && (<span className="b-list-item-type__current">Gjeldende versjon</span>)}</h3>
              }
              <div className="b-list-item-type__date">
                {fields.publishDate && (
                    fields.publishDate
                )}
              </div>
            </div>
            {fields.lead && (
              <div className="b-list-item-type__subheading">
                <Collapsible
                  heading="Endringer i denne versjonen"
                  size="small"
                >
                    <p className="b-list-item-type__lead" dangerouslySetInnerHTML={{__html: fields.lead}} />
                </Collapsible>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'person' && (
        <div className="b-list-item-type b-list-item-type--no-arrow">
          {fields.name && <strong>{fields.name}</strong>}
          <br />
          {fields.category && (
            <p className="b-list-item-type__category">{fields.category}</p>
          )}
          {fields.email && fields.email && (
            <div>
              <a
                href={`mailto:${fields.email}`}
                className="b-list-item-type__email"
                aria-label={fields.email}
              >
                {fields.email}
              </a>
            </div>
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
    </>
  );
};

ListItemType.propTypes = {
  itemType: PropTypes.shape({
    type: PropTypes.oneOf([
      'news',
      'conference',
      'pressRelease',
      'grantFunding',
      'person',
      'generic',
      'grant',
      'tilskudd',
    ]),
    fields: PropTypes.object
  }).isRequired
};

export default ListItemType;
