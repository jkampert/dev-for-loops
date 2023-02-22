// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
    var letterArr = [];
    for (let client of array) {
        for (var i = 0; i < client.name.length; i++) {
            if (client.name[i].toLowerCase() === letter.toLowerCase()) {
                letterArr.push(client.name);
            }
        }
    }
    return letterArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function