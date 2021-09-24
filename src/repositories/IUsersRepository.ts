import { User } from "../entities/User";

export interface IUIsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}