# Aditya.invents — Arduino Learning Website

Starter UI based on the supplied 9-page phone/desktop blueprint. This is a frontend prototype with demo data only. Firebase/backend and real admin authentication are intentionally not connected yet.

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev` and open the local URL printed in the terminal.
5. Run `npm run build` to check the production build.

## Current UI
- Responsive desktop and mobile layouts
- Dark/light theme toggle (saved in localStorage)
- Home, Learn, project archive, project details, lecture pages, course details and demo admin area
- YouTube embed support using a video ID or common YouTube URL
- Demo content lives in `src/data/`

## Important prototype limitations
- Admin pages are a UI preview, not secured. Do not publish this as a real admin system until backend authentication and authorization rules are implemented.
- Forms currently provide frontend feedback only; changes are not saved to a database.
- Uploading videos is not supported; paste a YouTube URL in the future admin form.

## Structure
- `src/features/*`: feature-specific pages/components/services/utils
- `src/components`, `src/context`, `src/utils`: shared UI and app-wide logic
- `src/data`: mock data, easy to replace with API/Firebase services later
