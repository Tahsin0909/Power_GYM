import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";


const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: 'email', required: true, placeholder: 'Your Email' },
                password: { label: "Password", type: 'password', required: true, placeholder: 'Your Password' }
            },
            async authorize(credentials) {
                const res = await fetch("https://mern-stack-server-vert.vercel.app/user", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                console.log(user);
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            },

        }),

    ],
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }