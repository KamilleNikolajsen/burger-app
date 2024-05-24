export function postReview(review: any) {
  return fetch('http://localhost:3001/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(e => {
    console.error('An error occurred while posting the review.', e);
  });
}

export function postImage(image: any) {
  return fetch('http://localhost:3001/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(image)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(e => {
    console.error('An error occurred while posting the image.', e);
  });
}