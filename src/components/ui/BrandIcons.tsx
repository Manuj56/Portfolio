import React from 'react'

interface IconProps {
  className?: string
}

export const GithubIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const LeetcodeIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.827a1.37 1.37 0 0 0-.006 1.936l1.248 1.248a1.37 1.37 0 0 0 1.93-.006l4.242-4.242a.274.274 0 0 1 .387 0l2.253 2.253a.274.274 0 0 1 0 .387l-4.242 4.242a1.37 1.37 0 0 0 0 1.937l1.248 1.248a1.37 1.37 0 0 0 1.937 0l4.242-4.242a2.474 2.474 0 0 0 0-3.498L14.444.411A1.374 1.374 0 0 0 13.483 0zm-8.89 4.9c-.35 0-.7.13-.96.41L.412 8.532a2.474 2.474 0 0 0 0 3.498l3.222 3.222a1.374 1.374 0 0 0 1.937 0l1.248-1.248a1.37 1.37 0 0 0 0-1.937L3.6 10.82a.274.274 0 0 1 0-.387l4.242-4.242c.54-.54.54-1.4 0-1.936L6.594 5.01a1.37 1.37 0 0 0-.98-.11zM18 13.5c-.2 0-.38.08-.53.22l-4.24 4.24a.27.27 0 0 1-.39 0l-2.25-2.25a.27.27 0 0 1 0-.39l4.24-4.24a1.37 1.37 0 0 0 0-1.94l-1.25-1.25a1.37 1.37 0 0 0-1.94 0l-4.24 4.24c-.54.54-.54 1.4 0 1.94l3.22 3.22c.54.54 1.4.54 1.94 0l1.25-1.25c.54-.54.54-1.4 0-1.94l4.24-4.24c.26-.26.6-.39.97-.39.37 0 .71.13.97.39l3.22 3.22c.54.54.54 1.4 0 1.94l-3.22 3.22a1.37 1.37 0 0 1-.97.4z" />
  </svg>
)
