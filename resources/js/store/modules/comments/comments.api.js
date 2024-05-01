import { HttpMethods } from "../../../utils/http-methods";

export class CommentsApi extends HttpMethods {
    constructor() {
        super("comments");
    }

    async getAll() {
        return super.getAll();
    }

    async getOne(id) {
        return super.getOne(id);
    }

    async create(payload) {
        return super.create(payload);
    }

    async update(id, payload) {
        return super.update(id, payload);
    }

    async delete(id) {
        return super.delete(id);
    }
}
