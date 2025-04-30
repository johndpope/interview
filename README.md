# Interview Helper

A React application to help manage interview questions and knowledge using Google Sheets as a backend. Built with React, TypeScript, and integrated with multiple AI services for AI-powered responses.

## Features

- 📝 Interview question management
- 📚 Knowledge tracking system
- 🤖 AI-powered answers using ChatGPT, Gemini, Mistral
- 🌐 Multi-language support (English/Vietnamese)
- 🎨 Dark/Light theme
- 📊 Google Sheets integration
- 🔄 Real-time updates

## Prerequisites

Before you begin, ensure you have:
- Node.js (version 20 or higher)
- npm (comes with Node.js)
- A Google Cloud Platform account
- A Google Sheet for storing data

## Installation

1. Clone the repository:
```bash
git clone https://github.com/huyduc1602/interview.git
cd interview
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
```bash
GOOGLE_SHEET_API_KEY=your_google_sheet_api_key
SPREADSHEET_ID=your_spreadsheet_id
OPENCHAT_API_KEY=your_chatgpt_api_key
GEMINI_API_KEY=your_gemini_api_key
MISTRAL_API_KEY=your_mistral_api_key
```

## Google Sheets Setup

1. Create a Google Sheet with two tabs:
   - "Danh mục kiến thức" (Knowledge Categories)
   - "Câu hỏi phỏng vấn" (Interview Questions)

2. Google Cloud Platform setup:
   - Visit [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable Google Sheets API
   - Create credentials (API key)
   - Add your domain to authorized origins

3. Sheet structure:
   - Knowledge tab columns: Category, Content, Status
   - Questions tab columns: Category, Question, Answer

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Get Google OAuth refresh token
npm run get-token
```

## Project Structure

```
interview/
├── public/                     # Static files
├── scripts/                    # Utility scripts
├── src/
│   ├── assets/                 # Static assets (images, fonts, etc.)
│   ├── components/             # Reusable UI components
│   │   ├── auth/               # Authentication components
│   │   ├── icons/              # Icon components
│   │   ├── ui/                 # UI components (buttons, inputs, etc.)
│   ├── hooks/                  # Custom hooks
│   ├── layouts/                # Layout components
│   ├── locales/                # i18n translations
│   ├── pages/                  # Page components
│   │   ├── InterviewQuestions/ # Interview Questions page components
│   │   ├── KnowledgeBase/      # Knowledge Base page components
│   ├── services/               # API services
│   ├── store/                  # Redux store
│   │   ├── actions/            # Redux actions
│   │   ├── reducers/           # Redux reducers
│   │   ├── selectors/          # Redux selectors
│   │   ├── slice/              # Redux slices
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript types
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main App component
│   ├── index.tsx               # Entry point
└── [README.md](http://_vscodecontentref_/2)                   # Project documentation
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_SHEET_API_KEY` | Google Sheets API key | Yes |
| `SPREADSHEET_ID` | ID of your Google Sheet | Yes |
| `OPENAI_API_KEY` | OpenAI API key | Yes |
| `OPENCHAT_API_KEY` | OpenChat API key | Yes |
| `GEMINI_API_KEY` | Gemini API key | Yes |
| `MISTRAL_API_KEY` | Mistral API key | Yes |
| `PERFLEXITY_API_KEY` | Perflexity API key | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `GOOGLE_REFRESH_TOKEN` | Google OAuth Refresh Token | Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth Client ID | Yes |
| `SUPABASE_URL` | Supabase URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase Anonymous Key | Yes |
| `PORT` | Development server port | No |

## Repository Secrets for Deployment

For GitHub Actions deployment, add these secrets to your repository:

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI responses | Yes |
| `GEMINI_API_KEY` | Google Gemini API key for AI responses | Yes |
| `MISTRAL_API_KEY` | Mistral AI API key for AI responses | Yes |
| `OPENCHAT_API_KEY` | OpenChat API key for AI responses | Yes |
| `PERFLEXITY_API_KEY` | Perflexity API key for AI responses | Yes |
| `GOOGLE_SHEET_API_KEY` | API key for Google Sheets integration | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `GOOGLE_REFRESH_TOKEN` | Google OAuth Refresh Token | Yes |
| `SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `GITHUB_TOKEN` | Automatically provided by GitHub Actions | Yes |
| `BASE_URL` | Base URL path for deployment (e.g., '/interview/') | Yes |

## Development

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:5173](http://localhost:5173)

3. Make changes and see them reflected in real-time

## Building for Production

1. Create production build:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Deployment

This project uses GitHub Actions for CI/CD. On push to main:
1. Tests are run
2. Build is created
3. Deployment to GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes:
```bash
git commit -m 'Add some amazing feature'
```

4. Push to the branch:
```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

## Troubleshooting

Common issues and solutions:

1. API Key errors:
   - Verify API key in `.env.local`
   - Check Google Cloud Console for restrictions

2. Sheet access issues:
   - Ensure sheet is shared properly
   - Verify spreadsheet ID

3. Build errors:
   - Clear node_modules: `rm -rf node_modules`
   - Reinstall: `npm install`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Redux Toolkit
- Google Sheets API
- OpenAI API
- Gemini API
- Mistral API
- Lucide Icons
- i18next
- React Router
- JSZip
- FileSaver.js
