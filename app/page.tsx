import {auth} from "@/auth"
import SignIn from "@/app/components/SignIn"
import UserCard from "@/app/components/UserCard"

export default async function Home() {
    const session = await auth()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6">
            <div className="z-10 w-full max-w-md mt-20 sm:mt-0">
                {session?.user ? (
                    <UserCard user={session.user}/>
                ) : (
                    <div
                        className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-pink-400 flex flex-col items-center gap-8">
                        <div className="text-center space-y-2">
                            <h1 className="text-4xl font-bold text-pink-600">CS 391 OAuth ✨</h1>
                            <p className="text-purple-600 text-sm font-semibold">Sign in with GitHub </p>
                        </div>
                        <SignIn/>
                    </div>
                )}
            </div>
        </main>
    )
}
