# Word Counter Script

This project is a Node.js script that reads a configuration file (`config.json`), which specifies a list of text files, and counts the number of valid words in each file. A "word" is defined as any sequence of alphabetic characters separated by whitespace, excluding any numbers or special characters.

## Features

- Loads the list of files from a `config.json` configuration file.
- Counts the number of valid words in each file.
- Logs the word count for each file.
- Filters out words containing numbers or special characters.
  
## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/word-counter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd word-counter
   ```

3. Install the necessary dependencies (if any are added later):

   ```bash
   npm install
   ```

## Usage

1. Create a `config.json` file in the root of your project. The `config.json` should contain a list of file paths as follows:

   ```json
   {
     "files": [
       "files/file1.txt",
       "files/file2.txt",
       "files/file3.txt"
     ]
   }
   ```

   Replace the file paths with the actual paths to your text files.

2. Add the text files in the specified directory.

3. Run the script using Node.js:

   ```bash
   node index.js
   ```

4. The script will output the word count for each file specified in the `config.json` file.

   Example output:

   ```
   files/file1.txt: 120 words
   files/file2.txt: 85 words
   files/file3.txt: 150 words
   ```

## Configuration

- The `config.json` file should be structured as follows:

  ```json
  {
    "files": [
      "path/to/your/file1.txt",
      "path/to/your/file2.txt"
    ]
  }
  ```

- The `files` field must be an array of file paths.

## Error Handling

- If there are any errors reading a file (e.g., file not found), the script will log the error message and continue with the next file.
