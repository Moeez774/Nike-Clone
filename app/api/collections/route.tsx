import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'


export async function GET(req: Request) {
    if (req.method != "GET") {
        return NextResponse.json({ message: "This method is not allowed", statusCode: 500 })
    }

    // fetching all collections of navs

    try {

        const filePath = path.join(process.cwd(), 'public', 'Data', 'Navs.json')

        // Read the file synchronously
        const fileContent = fs.readFileSync(filePath, 'utf-8')

        // Parse the JSON data
        const response = JSON.parse(fileContent)

        return NextResponse.json({ message: "Collections fecthed successfully", data: response, statusCode: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Error fetching all collection" + error, statusCode: 5000 })
    }
}