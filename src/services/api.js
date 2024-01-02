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