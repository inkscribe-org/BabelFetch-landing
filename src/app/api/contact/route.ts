import { NextRequest, NextResponse } from "next/server";

import { formSchema } from "@/lib/form-schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedInput = formSchema.parse(body);

    // do something with the data
    // eslint-disable-next-line no-console
    console.log(parsedInput);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.message,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}