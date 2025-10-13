import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'visitors.json');

export async function GET() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    const visitors = JSON.parse(data);
    return NextResponse.json(visitors);
  } catch {
    return NextResponse.json({ total: 0, today: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    const dataDirectory = path.join(process.cwd(), 'data');
    const dataFilePath = path.join(dataDirectory, 'visitors.json');

    try {
      await fs.mkdir(dataDirectory, { recursive: true });
    } catch {
      // Ignore error if directory already exists
    }

    let visitors;
    try {
      const data = await fs.readFile(dataFilePath, 'utf-8');
      visitors = JSON.parse(data);
    } catch {
      // If the file doesn't exist, create it with initial data
      visitors = { total: 0, today: 0, date: new Date().toISOString().split('T')[0] };
    }

    const today = new Date().toISOString().split('T')[0];

    visitors.total += 1;

    if (visitors.date === today) {
      visitors.today += 1;
    } else {
      visitors.today = 1;
      visitors.date = today;
    }

    await fs.writeFile(dataFilePath, JSON.stringify(visitors, null, 2));

    return NextResponse.json(visitors);
  } catch {
    return NextResponse.json({ message: 'Error updating visitor count' }, { status: 500 });
  }
}
