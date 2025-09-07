# Practice Web Application

## Overview
This is a simple educational web application built for learning purposes. It demonstrates basic HTML, CSS, and JavaScript functionality with an interactive interface.

## Features
- Interactive counter with increment/decrement buttons
- Dynamic background color changer with multiple gradient options
- Real-time clock with toggle functionality
- Responsive design that works on desktop and mobile
- Keyboard shortcuts for enhanced interaction

## Project Architecture
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Server**: Python HTTP server for static file serving
- **Port**: 5000 (configured for Replit environment)
- **Deployment**: Configured for autoscale deployment

## Recent Changes
- 2025-09-07: Initial setup with complete frontend application
- 2025-09-07: Configured workflows and deployment settings for Replit environment
- 2025-09-07: Added interactive features and responsive design

## Development
The application runs on a simple Python HTTP server configured to:
- Bind to 0.0.0.0:5000 to work with Replit's proxy system
- Serve static files from the root directory
- Support hot reloading for development

## Keyboard Shortcuts
- Arrow Up/Down: Increment/decrement counter
- Spacebar: Change background color
- C: Toggle clock on/off

## File Structure
```
/
├── index.html      # Main HTML file with application structure
├── style.css       # Styling with responsive design and animations
├── script.js       # Interactive functionality and event handlers
├── replit.md       # Project documentation
└── .replit         # Replit configuration
```