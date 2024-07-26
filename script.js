document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const password = generatePassword(length, includeSymbols);
    document.getElementById('password-result').textContent = password;
});

function generatePassword(length, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characters = lowercase + uppercase + numbers;
    if (includeSymbols) {
        characters += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
