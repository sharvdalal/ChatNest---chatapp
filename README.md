# ChatNest

## Description

ChatNest is a modern chatting application that allows users to sign up, log in, search for other users, and engage in real-time conversations. With its visually appealing UI and seamless user experience, ChatNest aims to provide a platform for meaningful interactions.

# Live Link
https://chatnest-pu2a.onrender.com/

## Features

- **User Authentication:** Users can sign up and log in securely.
- **User Search:** Easily find and connect with other users.
- **Real-Time Chat:** Engage in conversations using Socket.io for instant messaging.
- **Notifications:** Receive sound notifications for new messages.
- **Visually Appealing UI:** A modern and user-friendly interface designed for an enhanced chatting experience.

## Technologies Used

- **Frontend:** React, TypeScript
- **Backend:** Express.js, TypeScript
- **Database:** PostgreSQL (using Prisma ORM)
- **Real-Time Communication:** Socket.io
- **Hosting:** Neon.tech for PostgreSQL database


## Installation

To set up the ChatNest application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chatnest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chatnest
   ```

3. Configure your environment variables in a `.env` file at the root of the project:
   ```env
   DATABASE_URL="Your Db URL(PostgreSQL)"
   JWT_SECRET=yoursecretkey
   NODE_ENV=development
   PORT=5001
   ```

4. Install dependencies for the backend:
   ```bash
   npm install
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

6. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

7. Start the frontend server:
   ```bash
   npm run dev
   ```

## Usage

Once both the backend and frontend servers are running, open your browser and navigate to frontend url to start using ChatNest.

## Contributing

Contributions are welcome! If you'd like to contribute to ChatNest, please follow these steps:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.


## Acknowledgments

-  Neon.tech (https://neon.tech) for providing the PostgreSQL database.
