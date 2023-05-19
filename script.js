// Get the element with the id 'joke' and store it in the jokeEl variable
const jokeEl = document.getElementById('joke')

// Get the element with the id 'jokeBtn' and store it in the jokeBtn variable
const jokeBtn = document.getElementById('jokeBtn')

// Add an event listener to the jokeBtn element, listening for a click event and calling the generateJoke function
jokeBtn.addEventListener('click', generateJoke)

// Call the generateJoke function immediately to display an initial joke
generateJoke()

// Define an async function named generateJoke
async function generateJoke() {
    // Define a configuration object with headers specifying 'Accept' as 'application/json'
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    // Make an asynchronous request to the 'https://icanhazdadjoke.com' URL with the specified config
    const res = await fetch('https://icanhazdadjoke.com', config)

    // Extract the JSON data from the response
    const data = await res.json()

    // Set the inner HTML of the jokeEl element to the 'joke' property from the retrieved data
    jokeEl.innerHTML = data.joke
}
