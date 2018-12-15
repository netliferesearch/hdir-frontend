const allNewsItems = [
  {
    type: 'news',
    fields: {
      heading: 'A new thing happened',
      publishDate: '03.12.2018',
      lead: 'asdf'
    }
  },
  {
    type: 'news',
    fields: {
      heading: 'This is news #2',
      publishDate: '04.11.2018',
      lead: 'dslfgndsgsdkg diabetes'
    }
  },
  {
    type: 'news',
    fields: {
      heading: 'This is news #3',
      publishDate: '06.06.2017',
      lead: 'asdf ikke diabetes'
    }
  },
  {
    type: 'news',
    fields: {
      heading: 'This is news #4',
      publishDate: '02.01.2015',
      lead: 'Ikke røyk, røyking er ikke bra'
    }
  },
  {
    type: 'news',
    fields: {
      heading: 'This is news #5',
      publishDate: '25.07.2018',
      lead: 'lorem ipsum'
    }
  }
];

exports.handler = async (event, context) => {
  const searchQuery = event.queryStringParameters.searchQuery;

  if (!searchQuery)
    return {
      statusCode: 404,
      body: '404 Not found'
    };

  const search = searchQuery =>
    allNewsItems.filter(
      item =>
        Object.values(item.fields).filter(prop => prop.includes(searchQuery))
          .length
    );

  const searchResult = search(searchQuery);

  if (!searchResult.length)
    return {
      statusCode: 404,
      body: '404 Not found'
    };

  return {
    statusCode: 200,
    body: JSON.stringify(searchResult.slice(0, 5))
  };
};
