import { NextResponse } from 'next/server';
import { WriteJokeWorkflow } from '@/gensx/workflows/writeJoke';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Joke request received:', body);
    
    const result = await WriteJokeWorkflow.run({ text: "AI workflows" });
        
    return NextResponse.json({
      success: true,
      message: 'Workflow executed successfully',
      timestamp: new Date().toISOString(),
      requestData: body,
      result: result,
    });
  } catch (error) {
    console.error('Error processing workflow request:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process workflow request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 