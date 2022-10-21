export const getRequest = (header) => {
  const serverAddress = 'server/api';

  const headerParts = header.split('?');
  const requestAdressParts = headerParts[0].split('/');
  const requestAdress = requestAdressParts[0] + '/' + requestAdressParts[1];

  if (serverAddress === requestAdress) {
    const endpoint = requestAdressParts[2];
    const action = endpoint;
    
    if (headerParts[1]) {
      const parameters = headerParts[1].split('&')
      .map(parametr => parametr.split('=')[1]);

      return [
        action,
        ...parameters
      ];
    }
    return [ action ];
  } else {
    const action = 'error';
    return [ action ]
  }
};

export const getDataPage = (data, page, length) => {
  const reversedData = [ ...data ].reverse();
  const pageLength = length;
  const dataPages = [];
  let dataPage = [];
  let dataCounter = 0;

  for (let i = 0; i < reversedData.length; i++) {
    const item = reversedData[i];

    if (dataCounter < pageLength) {
      dataPage.push(item);
      dataCounter++;
    }
    
    if (dataCounter === pageLength) {
      dataPages.push(dataPage);
      dataPage = [];
      dataCounter = 0;
    }

    if (i === data.length - 1 && dataPage.length) {
      dataPages.push(dataPage);
    }
  }

  return page <= dataPages.length 
    ? {
        items: dataPages[page - 1],
        totalCount: data.length
      }
    : {
        items: [],
        totalCount: data.length
      };
};
