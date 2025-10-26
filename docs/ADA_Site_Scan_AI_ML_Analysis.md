# ADA Site Scan — AI/ML Accessibility Analysis

## Overview
ADA Site Scan evaluates websites for ADA and WCAG 2.1 compliance using an AI/ML audit engine powered by Readdy AI prompts.

## Objectives
- Detect accessibility issues (alt text, ARIA, contrast, labels).  
- Use AI reasoning to classify issues.  
- Generate accessible PDF reports and voice summaries.

## Architecture
| Module | Function |
|---------|-----------|
| Audit Engine | DOM inspection for violations |
| AI Layer | Readdy prompt execution |
| Report Generator | Creates PDF/Text outputs |
| Voice Announcer | Web Speech API feedback |
| UI Dashboard | Interactive frontend |

## Workflow
1. User enters URL.  
2. Audit engine analyzes DOM.  
3. Violations detected.  
4. Readdy AI classifies severity.  
5. Report & voice summary generated.

## Example Output
```json
{
  "page": "https://example.com",
  "violations": [
    {"rule": "Missing alt text", "severity": "Major"},
    {"rule": "Low contrast text", "severity": "Minor"}
  ]
}

Future Enhancements

Sitemap multi-page crawl

Live contrast prediction

Accessibility overlay suggestions

© 2025 Karimulla Khaji
