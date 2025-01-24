import { PrismaClient } from "@prisma/client";
import { string } from "zod";

const prisma = new PrismaClient()


async function getUserDetails(email: string) {
    const res = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
          firstName: true,
          lastName: true
        }
    })
    console.log(res)
}

getUserDetails("abc@gmail.com")