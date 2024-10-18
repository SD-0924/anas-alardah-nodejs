import { writeFile, readFile } from "fs/promises";

/**
 * Loads the configuration from config.json and counts the words in the specified files.
 * @throws {Error} If there is an error reading the config file.
 */
async function loadConfig() {
    try {
        // Read the config.json file
        const data = await readFile("config.json", "utf8");

        // Parse the JSON data
        const config = JSON.parse(data);

        // Validate the config
        if (!config || !Array.isArray(config.files)) {
            throw new Error("Invalid config file");
        }

        // Access the files array
        console.log(config.files); // Logs: [ 'files/file1.txt', 'files/file2.txt', 'files/file3.txt' ]

        // You can now work with the files array
        for (const file of config.files) {
            try {
                const wordCount = await countWords(file);
                console.log(`${file}: ${wordCount} words`);
            } catch (err) {
                console.error(`Error counting words in ${file}:`, err);
            }
        }
    } catch (err) {
        console.error("Error reading config file:", err);
    }
}

/**
 * Reads a file and returns the number of words it contains.
 * A "word" is any sequence of alphanumeric characters separated by whitespace.
 * This function is case-sensitive and will count "Hello" and "hello" as two different words.
 * @param {string} file The path to the file to read.
 * @returns {number} The number of words in the file.
 */
async function countWords(file) {
    try {
        // Read the file and split it into an array of words
        const data = await readFile(file, "utf8");
        const words = data?.split(/\s+/) || []; // null-safe split

        // Filter out "words" containing numbers or special characters
        const validWords = words.map(word => word.replace(/[.,]$/, '')) // Remove trailing periods and commas
        .filter(word => /^[a-zA-Z]+([''-]?[a-zA-Z]+)*$/.test(word));
        return validWords.length;
    } catch (err) {
        console.error("Error reading file:", err);
        return 0;
    }
}


/**
 * The main entry point of the script.
 * Calls loadConfig() to load the configuration from config.json and
 * count the words in the files specified in the configuration.
 */
function main(){
    loadConfig();
}

main();