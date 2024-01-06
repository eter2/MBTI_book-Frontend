const url = 'http://ec2-43-202-12-112.ap-northeast-2.compute.amazonaws.com:8080';

exports.getOneQuestion = async (questionId) => {
  try {
    const response = await fetch(`${url}/api/questions/${questionId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      console.error('Data fetch failed:', data.message);
    }
  } catch (error) {
    console.error('Error during data fetch:', error);
  }
}

exports.getBookSearch = async (name) => {
  try {
    const response = await fetch(`${url}/api/book-search?param=${name}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      console.error('Data fetch failed:', data.message);
    }
  } catch (error) {
    console.error('Error during data fetch:', error);
  }
}

exports.postBookSearch = async (id, books) => {
  try {
    const response = await fetch(`${url}/api/bookmarkBookMapping`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookmarkId: id,
        books: books,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during data post:', error);
  }
}

exports.getResult = async (id) => {
  try {
    const response = await fetch(`${url}/api/bookmarkBookMapping?bookmarkId=${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      console.error('Data fetch failed:', data.message);
    }
  } catch (error) {
    console.error('Error during data fetch:', error);
  }
}