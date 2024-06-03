# Notezy

**Notezy** is a simple tool for managing notes, built with Node.js. It allows you to create, list, search, and delete notes, as well as view them in a web interface.

## Features

- Add new notes with optional tags
- List all notes
- Search notes by content
- Remove notes by ID
- Remove all notes
- Launch a web server to view notes in a browser

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/notezy.git
    cd notezy
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

### Commands

- **Add a new note**

    ```sh
    notezy new <note> [--tags <tags>]
    ```

  - `<note>`: The content of the note.
  - `--tags, -t`: Optional comma-separated tags.

    Example:

    ```sh
    notezy new "Buy groceries" --tags "personal,reminder"
    ```

- **List all notes**

    ```sh
    notezy all
    ```

- **Find notes by content**

    ```sh
    notezy find <filter>
    ```

  - `<filter>`: The search term to filter notes by.

    Example:

    ```sh
    notezy find "groceries"
    ```

- **Remove a note by ID**

    ```sh
    notezy remove <id>
    ```

  - `<id>`: The ID of the note you want to remove.

    Example:

    ```sh
    notezy remove 1717427916092
    ```

- **Remove all notes**

    ```sh
    notezy clean
    ```

- **Launch the web interface**

    ```sh
    notezy web [port]
    ```

  - `[port]`: Optional. The port to bind the web server on. Default is 5000.

    Example:

    ```sh
    notezy web 8080
    ```

### Project Structure

- `db.js`: Contains functions for interacting with the database (inserting, retrieving, and saving notes).
- `notes.js`: Contains functions for managing notes (creating, fetching, filtering, removing).
- `util.js`: Utility functions, such as `listNotes`, to format and display notes.
- `server.js`: Contains functions to start a web server to view notes in a browser.
- `index.js`: The main entry point for the CLI application, implemented using `yargs` for argument parsing and command handling.

## Acknowledgements

- Built with [Node.js](https://nodejs.org/)
- CLI powered by [yargs](http://yargs.js.org/)

## Possible Updates and Future Plans

### Database Enhancement

- **Move to MongoDB**: Transition from the current file-based storage to a MongoDB database to enhance scalability and reliability.
- **Cloud Integration**: Integrate with cloud-based MongoDB services like MongoDB Atlas for seamless data management and backups.

### Frontend Development and UI/UX Enhancements

- **React/Next.js Frontend**: Web app for managing notes.
- **API Integration**: Create a RESTful API or GraphQL backend to enable the frontend to interact with the note management system.
- **Responsive Design**:

### Additional Features

- **User Authentication**: Implement user authentication and authorization to provide secure access to notes.
- **Tag Management**: Add features for better tag management, such as tag suggestions, tag editing, and tag-based filtering.
- **Rich Text Notes**: Support for rich text formatting in notes, including bold, italic, lists, and more.
- **Search Improvements**: Enhance the search functionality with advanced filtering options, such as search by date range, tag, and more.
- **Mobile App**: Probably not gonna happen :(

### Performance Improvements

- **Caching**: Implement caching strategies to improve the performance of the web application.
- **Optimized Loading**: Optimize the loading times for large datasets and enhance the overall performance of the application.
