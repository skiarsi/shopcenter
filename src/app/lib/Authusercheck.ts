import { PrismaClient } from "@prisma/client";

export async function addauthuser(id:string) {
 
  const db = new PrismaClient();
  const user = await db.user.count({
    where:{
      user_id: id
    }
  });

  if(user === 0){
    await db.user.create(
      {
        data:{
          user_id: id
        }
      }
    )
  }
  
}