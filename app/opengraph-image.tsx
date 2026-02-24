import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '小峯海円 | 起業家';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          小峯 海円
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#a1a1aa',
            marginBottom: 20,
          }}
        >
          Kaien Komine
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#a855f7',
            marginBottom: 30,
          }}
        >
          起業家 / Entrepreneur
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#71717a',
          }}
        >
          「おもろい人生にする」
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
