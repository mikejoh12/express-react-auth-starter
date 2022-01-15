const fetchSecretNrDb = async () => {
    try {
        // Normally we would call the database here
        return 42; // Return the secret nr
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = { fetchSecretNrDb }