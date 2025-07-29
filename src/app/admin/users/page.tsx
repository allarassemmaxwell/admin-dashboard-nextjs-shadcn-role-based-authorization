import { getUserList } from "../actions"

getUserList

export default async function page() {
    const users = await getUserList().then((response) => response.data)
    return (
        <div className="w-full space-y-8 p-6">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-3">
                <div>
                    <h3 className="font-medium">Members</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage roles of existing members. As an admin, you can add, edit or delete users.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        <ul>
                            {users.map((user, index) => (
                                <div key={user.id}>
                                    <li className="flex flex-col space-y-3 rounded-lg p-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                                        <div className="flex items-center space-x-4">
                                            <img src={user.imageUrl} className="h-9 w-9 rounded-full" alt={`${user.firstName} ${user.lastName}`} />
                                            <div className="flex items-center space-x-4">
                                                <p className="font-medium">{user.firstName} {user.lastName}</p>
                                                <p>
                                                    {
                                                        user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    )
}