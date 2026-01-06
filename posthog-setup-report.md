# PostHog post-wizard report

The wizard has completed a deep integration of your Jiro Kiosk project. PostHog has been set up using the modern `instrumentation-client.ts` approach for Next.js 16+, which provides clean client-side initialization without the need for a provider wrapper. Environment variables have been configured for secure API key management, and event tracking has been added across key user interaction points in the kiosk application.

## Integration Summary

### Files Created
- `.env` - Environment variables for PostHog configuration
- `instrumentation-client.ts` - Client-side PostHog initialization for Next.js 16+

### Files Modified
- `src/components/sidebar.jsx` - Floor selection tracking
- `src/components/search-bar.jsx` - Search engagement tracking
- `src/components/offices-list.jsx` - Office card click tracking
- `src/components/pages/Detail.jsx` - Office detail view and engagement tracking

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `floor_selected` | User selects a floor filter from the sidebar to filter offices | `src/components/sidebar.jsx` |
| `search_performed` | User performs a search query for offices by name, company, or room number | `src/components/search-bar.jsx` |
| `search_auto_reset` | Search query was automatically reset after idle timeout | `src/components/search-bar.jsx` |
| `office_card_clicked` | User clicks on an office card to view details - top of detail viewing funnel | `src/components/offices-list.jsx` |
| `office_detail_viewed` | User views the full office detail page in the fullscreen dialog | `src/components/pages/Detail.jsx` |
| `office_detail_back_clicked` | User clicks the back button to close the office detail dialog | `src/components/pages/Detail.jsx` |
| `office_detail_auto_close` | Office detail dialog was automatically closed after idle timeout (2 minutes) | `src/components/pages/Detail.jsx` |
| `qr_code_displayed` | QR code for contact information (email/phone) is displayed to the user - indicates interest in contacting | `src/components/pages/Detail.jsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/33622/dashboard/971525) - Key analytics for the Jiro Kiosk office directory application

### Insights
- [Office Detail Conversion Funnel](https://us.posthog.com/project/33622/insights/qo51tsVE) - Tracks user conversion from clicking an office card to viewing details and engaging with contact info
- [Floor Selection Activity](https://us.posthog.com/project/33622/insights/VBV1bMBL) - Tracks which floors users select most frequently
- [Search Engagement](https://us.posthog.com/project/33622/insights/eqQXRB2J) - Tracks search activity including new searches and auto-resets
- [User Exit Behavior](https://us.posthog.com/project/33622/insights/lwpkrJ9k) - Compares manual back clicks vs auto-close timeouts
- [Most Viewed Offices](https://us.posthog.com/project/33622/insights/zdccSKgQ) - Shows which offices are viewed most frequently

## Configuration

Environment variables are stored in `.env`:
```
NEXT_PUBLIC_POSTHOG_KEY=<your-api-key>
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Make sure to add these to your hosting provider's environment variables for production deployment.
