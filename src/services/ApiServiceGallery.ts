export function getImages() {
    return fetch('http://localhost:3001/images')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(e => {
            console.error('An error occurred while fetching the images.', e);
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