# Digital Signage Content Management System

Welcome to the Digital Signage Content Management System (CMS) project. This repository contains the codebase for a simple digital signage solution, comprising a web dashboard for managing content and an Electron application for content display on devices.

## Project Features

### Web Dashboard
The web dashboard serves as the central hub for managing digital signage content. It includes the following features:

1. **Content Management**:
   - Content Editing, creating, generating with images, emogies, text and more.
   - Content scheduling options (optional).
   - Content list with status indicators.
   - Basic content organization with folders and categories.

2. **Device Monitoring**:
   - Display device status monitoring.

### Electron Display Application
The Electron app is responsible for rendering and displaying the content on signage devices. Features include:

1. **Content Display**:
   - Full-screen content playback.
   - Support for text and image content.

3. **Offline Capabilities**:
   - Local content storage for offline playback.
   - Content caching mechanism.
   - Automatic content sync when the connection is restored.
   - Local content backup.
   - Offline status indication.

## Getting Started

### Prerequisites
- Node.js (Latest stable version)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Meet-hadvani/signage.git
   cd signage
   ```

2. Install dependencies for the web dashboard and Electron app:
   ```bash
   cd web-dashboard
   npm install
   cd ../electron-app
   npm install
   ```

3. Set up the project configuration files (e.g., `.env`) as per your environment.

### Running the Project
#### Web Dashboard:
```bash
cd web-dashboard
npm start
```
Access the dashboard at `http://localhost:3000`.

#### Electron Display Application:
```bash
cd electron-app
npm start
```

### Building the Electron Application
To create an executable for your platform:
```bash
cd electron-app
npm run build
```

## Documentation
For detailed usage instructions, refer to the [documentation](https://github.com/Meet-hadvani/signage/docs).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you want to contribute.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

