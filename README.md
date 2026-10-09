# Amy Liu · Portfolio

Personal portfolio site, built with [Astro](https://astro.build) and deployed to GitHub Pages at
https://xiyuanliuamy.com.

## Editing content

Everything you'll usually change is Markdown:

| What | Where |
|---|---|
| Experience (jobs, clinic, leadership, research) | `src/content/experience/<name>/index.md` |
| Projects (course pages) | `src/content/projects/<course>/index.md`, with each lab in `src/content/projects/<course>/<lab>/index.md` (set `label: Lab 3` and `order`) |
| Name, links, skills, awards, coursework | `src/site.ts` |
| Headshot | `src/assets/headshot.jpg` |

Each entry has a block at the top (title, dates, summary, tags, `cover` image) that drives its card,
and a body below that becomes the detail page.

### Adding photos

Put the image in the same folder as the entry's `index.md` (or its `images/` subfolder) and write:

```md
![This text becomes the caption under the photo](./images/my-photo.jpg)
```

To use a photo on the card and at the top of the page, set `cover: ./images/my-photo.jpg` and
`coverAlt: short description` in the block at the top. Images are resized and compressed automatically.

### Adding a new project or experience

Copy an existing folder, rename it (the folder name becomes the URL), and edit `index.md`. Use `order`
to control position and `featured: true` to show a project on the home page.

### Resume PDF

Save the PDF as `public/resume.pdf` and set `resumePdf: '/resume.pdf'` in `src/site.ts`.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Deploying

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`. In the repo's
**Settings → Pages**, set **Source** to **GitHub Actions** once.
