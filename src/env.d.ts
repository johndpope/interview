/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GOOGLE_SHEET_API_KEY: string
    readonly SPREADSHEET_ID: string
    readonly OPENCHAT_API_KEY: string
    readonly GITHUB_CLIENT_ID: string
    readonly SUPABASE_ANON_KEY: string
    readonly SUPABASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}