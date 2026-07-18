# Retro Mubin Website

Static website prepared for GitHub and Cloudflare Pages.

## Files
- `index.html` — page content
- `style.css` — design and responsive layout
- `script.js` — mobile menu, PayID copy button and email booking form
- `assets/` — profile and gallery images

## Upload your own images
1. Put Mubin's main photo inside `assets`.
2. Name it `profile.jpg`.
3. In `index.html`, replace:
   `assets/profile-placeholder.svg`
   with:
   `assets/profile.jpg`

For gallery photos, upload files such as:
- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `photo-4.jpg`

Then update the image paths in `index.html`.

## Add videos
Find the YouTube video ID. Example:

`https://www.youtube.com/watch?v=ABC123`

The ID is `ABC123`.

Replace:
`https://www.youtube.com/embed/dQw4w9WgXcQ`

with:
`https://www.youtube.com/embed/ABC123`

## Booking process
The site:
1. Shows the AUD $29 fee.
2. Shows PayID `+61 433 191 579`.
3. Lets the user select a date and time.
4. Opens their email app with a completed booking request to:
   `bookings@retromubin.com`

This static version cannot automatically verify payments or block unavailable time slots.
For automatic payment confirmation and live calendar availability, a booking/payment service or backend will be required.

## Publish with GitHub and Cloudflare Pages
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. In Cloudflare, open **Workers & Pages**.
4. Select **Create application** → **Pages** → **Connect to Git**.
5. Select the GitHub repository.
6. Framework preset: **None**
7. Build command: leave blank
8. Build output directory: `/`
9. Deploy.
10. Add `retromubin.com` from the Cloudflare Pages **Custom domains** section.
