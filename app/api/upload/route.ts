import { NextResponse } from 'next/server';
import { mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate filename from title
    const timestamp = Date.now();
    const sanitizedTitle = title 
      ? title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : 'blog';
    const filename = `${sanitizedTitle}-${timestamp}.webp`;
    
    // Ensure blog directory exists
    const publicDir = path.join(process.cwd(), 'public');
    const blogDir = path.join(publicDir, 'blog');
    
    try {
      // Try to create the directory first
      await mkdir(blogDir, { recursive: true });
      
      // Convert to webp and save
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(path.join(blogDir, filename));

      return NextResponse.json({
        success: true,
        imagePath: `/blog/${filename}`,
      });
    } catch (err) {
      console.error('Error saving file:', err);
      return NextResponse.json(
        { success: false, error: 'Failed to save file' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Error uploading file:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
