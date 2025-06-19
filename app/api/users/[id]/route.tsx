import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { use } from "react";
import { number } from "zod";


export async function GET(request: NextRequest, params:{params : Promise<{id:string}> }){
    const paramId = await params.params
    const user = await prisma.user.findUnique({
        where : {id : paramId.id}
    })

    if(!user) 
        return NextResponse.json({error : 'User Not Found'}, {status : 404})
    return NextResponse.json(user)
}

export async function PUT(request:NextRequest,params:{params : Promise<{id:string}> }){
    const paramId = await params.params
    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})

    const user = await prisma.user.findUnique({
        where : {id : paramId.id}
    })

    if(!user)
        return NextResponse.json({error:'UserId not found'}, {status:400})

    const updatedUser = await prisma.user.update({
        where : {id : user.id},
        data : {
            name : body.name,
            email : body.email
        }
    })

    return NextResponse.json(updatedUser)
}

export async function DELETE(request:NextRequest, params:{params : Promise<{id:string}> }){
    return NextResponse.json({})
}