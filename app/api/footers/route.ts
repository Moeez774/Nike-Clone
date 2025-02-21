import { NextResponse } from "next/server";
import path from 'path'
import fs from 'fs'


export async function GET(req: Request) {
    if(req.method!="GET") {
        return NextResponse.json({ message: "This method is not allowed", statusCode: 500 })
    }

    try {

        // reading footer.json data and then converting to JSON
        const filePath = path.join(process.cwd(), "public", "Data", "Footer.json")

        const data = fs.readFileSync(filePath, 'utf-8')

        const allItems = JSON.parse(data)

        return NextResponse.json({ message: "Items fetched successfully", data: allItems, statusCode: 200 })

    } catch(error) {
        return NextResponse.json({ message: "Error fetching footer items", statusCode: 500 })
    }
}