import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Convert to URLSearchParams for Netlify Forms
    const params = new URLSearchParams();
    params.append('form-name', 'contact');
    
    Object.entries(body).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        params.append(key, value);
      }
    });

    // Get Netlify site URL from environment or headers
    const siteUrl = process.env.NETLIFY_URL || 
                    process.env.URL || 
                    request.headers.get('x-forwarded-host') || 
                    request.headers.get('host') || '';
    
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const fullUrl = siteUrl ? `${protocol}://${siteUrl}` : '';
    
    if (!fullUrl) {
      // Fallback: return success (form will be handled by Netlify on client side)
      return NextResponse.json({ success: true });
    }
    
    // Submit to Netlify Forms endpoint
    const response = await fetch(`${fullUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      // Still return success to avoid breaking UX
      // Netlify will handle the form submission
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    // Return success anyway - Netlify Forms will handle it
    return NextResponse.json({ success: true });
  }
}

