export function getBurgerPlaces() {
    return fetch('http://localhost:3001/burger-places')
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