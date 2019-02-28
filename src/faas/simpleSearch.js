const allNewsItems = [
  {
    title: 'A new thing happened',
    category: 'news',
    publishDate: '3. April 2018',
    intro: 'asdf',
    url: '/artikkel'
  },
  {
    title: 'This is news #2',
    category: 'news',
    file: 'PDF',
    publishDate: '4. April 2018',
    intro: 'dslfgndsgsdkg diabetes',
    url: '/artikkel'
  },
  {
    title: 'This is news #3',
    category: 'news',
    publishDate: '6. April 2017',
    intro: 'asdf ikke diabetes',
    url: '/artikkel'
  },
  {
    title: 'This is news #4',
    category: 'news',
    file: 'PDF',
    publishDate: '2. April 2015',
    intro: 'Ikke røyk, røyking er ikke bra',
    url: '/artikkel'
  },
  {
    title: 'æøå',
    category: 'news',
    publishDate: '2. April 2015',
    intro: 'Test av norske bokstaver, æøå',
    url: 'http://norge.no'
  },
  {
    title: 'This is news #5',
    category: 'news',
    publishDate: '5. April 2018',
    intro: 'lorem ipsum',
    url: '/artikkel'
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
        Object.values(item).filter(prop => prop.includes(searchQuery)).length
    );
  const searchResult = search(searchQuery);

  if (!searchResult.length)
    return {
      statusCode: 404,
      body: '404 Not found'
    };

  return {
    statusCode: 200,
    body: JSON.stringify(searchResult.slice(0, 4))
  };
};
