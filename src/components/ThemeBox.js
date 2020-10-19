import React from 'react';
import Box from './Box';
import Card from './Card';

const ThemeBox = ({ heading, cardsLeft, cardsRight, bottomLinks }) => {
  return (
    <div className="l-mt-4">
      <Box color="blueLight" square noPadding>
        <div className="l-container b-theme-box">
          <div className="row">
            <div className="col-xs-12 l-mb-1">
              <h2>{heading}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12 l-card-flex">
              { cardsLeft.map(card => (
                  <Card
                    verticalGrow
                    url={card.url}
                    arrow="right"
                    mainContent={
                      <>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <div className="b-flex l-mt-1">
                          <img
                            src={card.icon}
                            alt=""
                            role="presentation"
                            className="b-icon b-icon--heading"
                            style={{
                              height: '1.4em',
                              width: 'auto',
                              marginRight: '0.5em',
                              marginBottom: '-0.2em'
                            }}
                          />
                            <span className="b-icon__category">{card.category}</span>
                          </div>
                      </>
                    }
                  >
                  </Card>
                ))}
            </div>
            <div className="col-md-6 col-xs-12">
              {cardsRight.map(card => (
                <Card
                  url={card.url}
                  arrow="right"
                  mainContent={
                    <>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <div className="b-flex l-mt-1">
                        <img
                          src={card.icon}
                          alt=""
                          role="presentation"
                          style={{
                            height: '1.4em',
                            width: 'auto',
                            marginRight: '0.5em',
                            marginBottom: '-0.2em'
                          }}
                        />
                        <span className="b-icon__category">{card.category}</span>
                      </div>
                    </>
                  }
                >
                  <img src={card.image} alt={card.imageAlt} />
                </Card>
              ))}
            </div>
          </div>
          {
            bottomLinks ? (
              <div className="row">
                <div className="b-flex-links col-xs-12">
                  {
                    bottomLinks.map(link => (
                      <div className="b-flex-links__item">
                        <a href={link.url}>{link.title}</a>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null
          }
        
        </div>
      </Box>
    </div>
  );
};

export default ThemeBox;
