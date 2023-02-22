// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
    var notBroke = [];
    var lowestClient = [];
    for (let client of array) {
        if (client.balance !== 0) {
            notBroke.push(client);
        }
    }
    var client = notBroke[0];
    for (let i = 1; i < notBroke.length; i++) {
        if (notBroke[i].balance < client.balance) {
            client = notBroke[i];
        }
    }
    lowestClient.push(client);
    return lowestClient;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function