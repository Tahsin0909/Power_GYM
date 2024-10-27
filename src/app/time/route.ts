
export const GET = async () =>{
    return Response.json({
        currentTime : new Date().toLocaleDateString()
    })
}

// just for git push
export const POST = async () =>{
    return Response.json({
        currentTime : new Date().toLocaleDateString()
    })
}