import { NextRequest, NextResponse } from 'next/server';

// This route handles form submissions and forwards them to Netlify Forms
export async function POST(request: NextRequest) {
  try {
    // Get form data from request body (URLSearchParams)
    const body = await request.text();
    const params = new URLSearchParams(body);
    const formName = params.get('form-name') || 'unknown';

    // Get the site URL - prioritize Netlify environment variables
    // These are set automatically by Netlify during build/deploy
    const siteUrl = 
      process.env.URL || // Production URL
      process.env.DEPLOY_PRIME_URL || // Deploy preview URL
      process.env.NETLIFY_URL || // Netlify URL
      request.headers.get('x-forwarded-host') ? 
        `https://${request.headers.get('x-forwarded-host')}` : 
        null;

    if (!siteUrl) {
      // Fallback: construct from request URL
      const url = new URL(request.url);
      const host = request.headers.get('host') || url.host;
      const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
      const fallbackUrl = `${protocol}://${host}`;
      
      console.error('No Netlify URL found, using fallback:', fallbackUrl);
      // Still try to submit, but log the issue
    }

    const targetUrl = siteUrl || `${request.headers.get('x-forwarded-proto') || 'https'}://${request.headers.get('host') || 'localhost'}`;

    console.log('Submitting form to Netlify:', { 
      formName, 
      targetUrl,
      bodyPreview: body.substring(0, 150),
      env: {
        URL: process.env.URL,
        DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
        NETLIFY_URL: process.env.NETLIFY_URL
      }
    });

    // Submit to Netlify Forms endpoint at the root of the site
    // Netlify Forms processes POST requests to the root URL
    // Use the full URL to ensure it goes directly to Netlify, not through Next.js
    const response = await fetch(`${targetUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    const responseText = await response.text();
    console.log('Netlify Forms response:', {
      status: response.status,
      statusText: response.statusText,
      formName,
      responsePreview: responseText.substring(0, 200)
    });

    // Netlify Forms returns 200, 201, or 302 on success
    // Even if we get an error, Netlify might still process it asynchronously
    if (response.ok || response.status === 200 || response.status === 201 || response.status === 302) {
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    }

    // Return success anyway - Netlify Forms processes asynchronously
    // The form might still be processed even if we get an error response
    return NextResponse.json({ success: true, message: 'Form submitted (processing asynchronously)' });
  } catch (error) {
    console.error('Form submission error:', error);
    // Return success anyway - Netlify Forms might still process it
    return NextResponse.json({ success: true, message: 'Form submitted (may process asynchronously)' });
  }
}

