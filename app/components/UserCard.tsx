type UserProps = {
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
    }
}

export default function UserCard({user}: UserProps) {
    return (
        <div
            className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-pink-300 flex flex-col items-center gap-4 w-full">
            {user.image && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-300 ring-4 ring-pink-100">
                    <img
                        src={user.image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-pink-600">✨ {user.name} ✨</h2>
                <p className="text-purple-600 font-semibold">{user.email}</p>
            </div>
        </div>
    )
}
