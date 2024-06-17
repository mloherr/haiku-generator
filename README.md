# Haiku Generator 🌸

Welcome to the Haiku Generator project! This application allows users to generate random haikus with a simple button click. Additionally, users can listen to music while reading the haikus and learn about the history of haikus.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Random Haiku Generation**: Generate a unique haiku with each button click.
- **Background Music**: Enjoy soothing music while reading your haikus.
- **Haiku History**: Learn about the origins and significance of haikus.
- **User-Friendly Interface**: Simple and intuitive design for an enjoyable user experience.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: SQL

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/haiku-generator.git
cd haiku-generator
```

### 2. Install Dependencies

#### Frontend

```bash
cd web
npm install
```

#### Backend

```bash
cd ..
npm install
```

### 3. Set Up the Database

Ensure you have a SQL database set up with three tables, one for each line of the haiku.


### 4. Environment Variables

Create a `.env` file in the root directory and configure your environment variables. Example:

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
PORT=your_backend_port
```

### 5. Start the Application

#### Backend

```bash
npm run start
```

#### Frontend

Open a new terminal window and run:

```bash
cd web
npm run start
```

The application should now be running on `http://localhost:4002` or the port number you choose if you want to change it.

## Usage

1. Open your browser and navigate to `http://localhost:4002`.
2. Click the "Generate Haiku" button to see a new haiku.
3. Use the music player to enjoy background music.
4. Check the "Historia de los haikus" aside menu to learn about haikus.

## Contributing

We welcome contributions! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact us at:

- **Email**: soymarialoherr@gmail.com
- **Web**: [soymarialoherr.com](https://soymarialoherr.com)
- **GitHub**: [mloherre](https://github.com/mloherr)

Enjoy creating beautiful haikus! 🌸
