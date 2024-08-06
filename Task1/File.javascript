const votes = {
    "Option 1": 0,
    "Option 2": 0,
    "Option 3": 0
};

function submitVote() {
    const form = document.getElementById('votingForm');
    const selectedOption = form.option.value;

    if (selectedOption) {
        votes[selectedOption]++;
        displayResults();
    } else {
        alert('Please select an option before voting.');
    }
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results:</h2>
        <p>Option 1: ${votes["Option 1"]} votes</p>
        <p>Option 2: ${votes["Option 2"]} votes</p>
        <p>Option 3: ${votes["Option 3"]} votes</p>`;
}
