import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const fileId = '1AyCrw5m2b8ogwSuTrLgULqQkf2gRpCqb';
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
