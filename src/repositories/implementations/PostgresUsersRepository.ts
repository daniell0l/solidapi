import { User } from "../../entities/User";
import { IUIsersRepository } from "../IUsersRepository";


export class PostgresUsersRepository implements IUIsersRepository {
 private users: User[] = [];
  
 async findByEmail(email: string): Promise<User> {
     const user = this.users.find(user => user.email == email);

     return user
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}