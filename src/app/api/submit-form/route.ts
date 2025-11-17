import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formName = body['form-name'];
    
    // Convert to URLSearchParams for Netlify Forms
    const params = new URLSearchParams();
    
    // Add all form fields
    Object.entries(body).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        params.append(key, value);
      }
    });

    // Get the site URL from Netlify environment variables
    // Netlify provides URL in production, DEPLOY_PRIME_URL in deploy previews
    const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || '';
    
    // For Netlify Forms, we need to submit to the site's root URL
    // If no URL is available, try to construct from request
    let targetUrl = siteUrl;
    
    if (!targetUrl) {
      // Fallback: try to get from request headers
      const host = request.headers.get('host');
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      if (host) {
        targetUrl = `${protocol}://${host}`;
      }
    }

    if (!targetUrl) {
      console.error('Netlify URL not found. Environment variables:', {
        URL: process.env.URL,
        DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
        host: request.headers.get('host'),
      });
      return NextResponse.json(
        { error: 'Server configuration error: Site URL not found' },
        { status: 500 }
      );
    }

    // Submit to Netlify Forms endpoint
    // Netlify Forms expects POST to the root URL with form-urlencoded data
    const formUrl = `${targetUrl}/`;
    
    console.log('Submitting to Netlify Forms:', {
      formName,
      url: formUrl,
      fields: Array.from(params.keys()),
      params: params.toString(),
    });

    // Make the request to Netlify Forms
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Next.js Form Handler',
      },
      body: params.toString(),
    });

    // Log response for debugging
    const responseText = await response.text();
    console.log('Netlify Forms response:', {
      formName,
      status: response.status,
      statusText: response.statusText,
      url: formUrl,
      responsePreview: responseText.substring(0, 200),
    });

    // Netlify Forms typically returns 200 or 302 on success
    // Sometimes it returns 200 with HTML, sometimes 302 redirect
    // We consider it successful if status is 200, 201, or 302
    if (response.ok || response.status === 200 || response.status === 201 || response.status === 302) {
      return NextResponse.json({ success: true });
    }

    // If status is not OK, return error
    return NextResponse.json(
      { 
        error: 'Failed to submit form', 
        details: responseText.substring(0, 500),
        status: response.status 
      },
      { status: response.status }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit form', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

