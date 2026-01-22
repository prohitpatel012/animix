
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/lib/models/Blog';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const data = await req.json();

        const blog = await Blog.create(data);

        return NextResponse.json({ success: true, data: blog }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (id) {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
            }
            const blog = await Blog.findById(id);
            if (!blog) {
                return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, data: blog });
        }

        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: blogs });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 }); // Changed to 500 for generic server errors
    }
}

export async function PUT(req: NextRequest) {
    try {
        await dbConnect();
        const data = await req.json();
        const { _id, ...updateData } = data;

        if (!_id) {
            return NextResponse.json({ success: false, error: 'Post ID is required' }, { status: 400 });
        }

        const blog = await Blog.findByIdAndUpdate(_id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!blog) {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: blog });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ success: false, error: 'Post ID is required' }, { status: 400 });
        }

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
