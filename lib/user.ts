import { auth } from "@/auth"


export const getUser = async () => {
    const user = await auth();

    if(!user?.user?.id) {
        return null
    }

    return user;
}