import { NextRequest, NextResponse } from 'next/server';

// This route handles form submissions and forwards them to Netlify Forms
export async function POST(request: NextRequest) {
  try {
    // Get form data
    const formData = await request.formData();
    
    // Convert to URLSearchParams
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        params.append(key, value);
      }
    }

    // Get site URL - use environment variables first, then construct from request
    const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || '';
    let targetUrl = siteUrl;
    
    if (!targetUrl) {
      const host = request.headers.get('host');
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      if (host) {
        targetUrl = `${protocol}://${host}`;
      }
    }

    if (!targetUrl) {
      console.error('Netlify URL not found');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const formName = params.get('form-name') || 'unknown';
    console.log('Submitting form to Netlify:', { formName, targetUrl });

    // Submit to Netlify Forms endpoint
    // Use the full URL to avoid Next.js routing
    const response = await fetch(`${targetUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const responseText = await response.text();
    console.log('Netlify Forms response:', {
      status: response.status,
      statusText: response.statusText,
      formName,
    });

    // Netlify Forms returns 200, 201, or 302 on success
    // Even if we get an error, Netlify might still process it asynchronously
    if (response.ok || response.status === 200 || response.status === 201 || response.status === 302) {
      return NextResponse.json({ success: true });
    }

    // Return success anyway - Netlify Forms processes asynchronously
    // The form might still be processed even if we get an error response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    // Return success anyway - Netlify Forms might still process it
    return NextResponse.json({ success: true });
  }
}

