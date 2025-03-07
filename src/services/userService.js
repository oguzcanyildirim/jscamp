export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        //this would be a point in which we send a request to an api
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }

}