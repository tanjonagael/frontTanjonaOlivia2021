import { Roles } from './roles.model'

export class User {
    _id?: String
    username: String
    password: String
    fullname?: String
    roles?: Number
    role_user:Roles

}
