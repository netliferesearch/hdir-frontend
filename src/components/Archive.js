import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from '../components/Collapsible';
import Heading from '../components/Heading';
import shortid from 'shortid';

/*
** Based on markup for List.js and ListItemType.js
*/

const Archive = ({items}) => {

  return (
    <nav
      className="b-nav-list"
      id={shortid.generate()}
      aria-label="Versjoner i arkiv"
    >
      <Heading h={'h2'} className="b-nav-list__heading h4">25 versjoner</Heading>
      <ul className="b-nav-list__items">
        {items.map(item => {
          return (
            <li 
            key={shortid.generate()}
            className="b-nav-list__item">
              <div className="b-nav-list__link b-nav-list__link--no-pointer">
                <div
                  className={'b-list-item-type'}
                >
                  <div className="b-list-item">
                    <div className="b-list-item-type__text">
                      {item.download && (
                        <a href="#pdf" className="b-list-item-type__download b-list-item-type--float b-list-item-type--link" aria-label="Last ned PDF">PDF</a>
                      )}
                      {item.heading &&
                        <h3>{item.heading} {item.current && (<span className="b-list-item-type__current">Gjeldende versjon</span>)}</h3>
                      }
                      <div className="b-list-item-type__date">
                        {item.publishDate && (
                          item.publishDate
                        )}
                      </div>
                    </div>
                    {item.lead && (
                      <div className="b-list-item-type__subheading">
                        <Collapsible
                          heading="Endringer i denne versjonen"
                          size="small"
                        >
                          <>
                            <p className="b-list-item-type__lead" dangerouslySetInnerHTML={{ __html: item.lead }} />
                            {item.chapters ? item.chapters.map(chapter => (
                              <Collapsible
                                heading={chapter.title}
                                size="small"
                              >
                                <p dangerouslySetInnerHTML={{ __html: chapter.description }} />
                              </Collapsible>)
                            ) : null}
                          </>
                        </Collapsible>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};

Archive.propTypes = {
  items: PropTypes.array,
};

export default Archive;
