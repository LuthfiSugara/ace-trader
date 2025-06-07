import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const fileId = '16GXU3pl1_2pNkxk-h7nmY6X1nZ5kQTDV';
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
