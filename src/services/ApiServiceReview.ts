export function getReviews() {
    return fetch('http://localhost:3001/reviews')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(e => {
            console.error('An error occurred while fetching the reviews.', e);
        });
}

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