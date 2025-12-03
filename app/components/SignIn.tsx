import {signIn} from "@/auth"

export default function SignIn() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
                className="w-full"
            >
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    ✨ Sign in with GitHub ✨
                </button>
            </form>
        </div>
    )
}
