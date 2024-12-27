import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import posthog from 'posthog-js'

import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_iQ9ZdWZL3ajz4F7LlYJ6k3U6IHNS8SbO2xjk6Qb42tA', {
  api_host:'https://us.i.posthog.com',
  person_profiles: 'always' 
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
)
