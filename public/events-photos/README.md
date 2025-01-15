# Events & Engagements Directory

This directory contains photos and descriptions of speaking engagements, workshops, and tech events.

## Directory Structure

```
events-photos/
├── README.md
├── manifest.json
├── event-name.jpg
└── event-name.txt
```

## Adding New Events

1. Add your event photo:
   - Save the photo as `event-name.jpg`
   - Use kebab-case for the filename (e.g., `cloud-workshop.jpg`)
   - Ensure the image is high quality but optimized for web

2. Create the description file:
   - Create a text file with the same name: `event-name.txt`
   - Format:
     ```
     Event description here...
     Multiple paragraphs are supported...
     
     https://linkedin.com/post-url
     ```
   - The last line must be the LinkedIn post URL

3. Update the manifest:
   ```bash
   npm run update-events
   ```

## File Requirements

### Photo Files (.jpg)
- Format: JPEG
- Aspect ratio: 16:9 (recommended)
- Resolution: At least 1280x720
- Size: < 500KB (optimize for web)

### Description Files (.txt)
- Format: Plain text (UTF-8)
- Content:
  - Event description
  - Date (will be auto-extracted)
  - Location (will be auto-extracted)
  - LinkedIn URL on the last line

## Example

`cloud-workshop.txt`:
```
Led a hands-on workshop on Google Cloud Platform fundamentals at Duzce University in March 2024. 
The workshop covered essential GCP services, cloud architecture, and best practices in cloud engineering.

Participants learned about:
- Cloud Computing Basics
- GCP Core Services
- Cloud Architecture Patterns
- Best Practices

https://linkedin.com/posts/your-post-id
```

## Automatic Updates

The manifest is automatically updated when you run:
```bash
npm run update-events
```

This will:
1. Scan the directory for new events
2. Extract dates and locations
3. Update the manifest.json file
4. Sort events by date (newest first) 