import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { use } from "react";
export type User = {
    id: number,
    firstName?: string,
    lastName?: string,
    lastSignInAt: number,
    emailAddresses: {id: number, emailAddress: string, [key: string]: any;}[],
    [key: string]: any;
}
export function UsersTable({data}: {
    data: User[]
}) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Users</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Last seen</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src="https://github.com/shadcn.png" alt={`${user.firstName} ${user.lastName}`} />
                                        <AvatarFallback>
                                            {user.firstName? user.firstName[0] : ''}
                                            {user.lastName? user.lastName[0] : ''}
                                        </AvatarFallback>
                                    </Avatar>
                                    {user.firstName} {user.lastName}
                                </div>
                            </TableCell>
                            <TableCell>{user.emailAddresses[0].emailAddress}</TableCell>
                            <TableCell>{new Date(user.lastSignInAt).toLocaleString()}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}