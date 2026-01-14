# Project33 - Media Search Application

A modern, responsive media search application built with React and Vite, allowing users to search and browse photos and videos from popular APIs.

## Features

- **Dual Media Search**: Search for both photos (via Unsplash API) and videos (via Pexels API)
- **Tabbed Interface**: Switch between photo and video results seamlessly
- **Responsive Grid Layout**: Beautiful grid display of search results
- **Collection Management**: Save and organize favorite media items
- **State Management**: Redux Toolkit for efficient state handling
- **Modern UI**: Styled with TailwindCSS for a clean, professional look

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **APIs**:
  - Unsplash API (Photos)
  - Pexels API (Videos)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd project33
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   VITE_API_URL=your_unsplash_access_key
   VITE_API_PEXELS=your_pexels_api_key
   ```

   **Note**: Get your API keys from:
   - [Unsplash Developers](https://unsplash.com/developers)
   - [Pexels API](https://www.pexels.com/api/)

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```

2. The build artifacts will be stored in the `dist/` directory.

3. Deploy the contents of the `dist/` directory to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

**Note**: Ensure your environment variables are set in your deployment platform's settings.

## Project Structure

```
src/
├── apis/
│   └── MediaApi.js          # API functions for Unsplash and Pexels
├── components/
│   ├── Navbar.jsx           # Navigation bar component
│   ├── SearchBar.jsx        # Search input component
│   ├── Tabs.jsx            # Tab navigation for photos/videos
│   ├── ResultGrid.jsx      # Grid display of search results
│   └── ResultCard.jsx      # Individual media item card
├── pages/
│   ├── Homepage.jsx        # Main search page
│   └── CollectionPages.jsx # Collections page
├── redux/
│   ├── store.js            # Redux store configuration
│   └── features/
│       ├── SearchSlice.js  # Search state management
│       └── collectionSlice.js # Collection state management
├── contexts/               # React contexts (if any)
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx               # App entry point
```

## API Usage

The application integrates with two external APIs:

### Unsplash API
- Used for photo search
- Returns 20 photos per page
- Requires Client-ID authentication

### Pexels API
- Used for video search
- Returns up to 15 videos per query
- Requires Bearer token authentication

## State Management

The app uses Redux Toolkit for state management with two main slices:

- **Search Slice**: Manages search queries and current tab state
- **Collection Slice**: Handles saved media collections

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is for educational purposes.

## Acknowledgments

- [Unsplash](https://unsplash.com/) for providing free high-quality photos
- [Pexels](https://www.pexels.com/) for providing free stock videos
