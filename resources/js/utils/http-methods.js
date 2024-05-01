import axios from "axios";

export class HttpMethods {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async getAll() {
        try {
            const { data } = await axios.get(`/api/${this.endpoint}/`);
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
    async getOne(id) {
        try {
            const { data } = await axios.get(`/api/${this.endpoint}/${id}`);
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
    async create(payload) {
        try {
            return await axios.post(`/api/${this.endpoint}/`, payload);
        } catch (e) {
            throw new Error(e);
        }
    }
    async update(id, payload) {
        try {
            return await axios.patch(`/api/${this.endpoint}/${id}`, payload);
        } catch (e) {
            throw new Error(e);
        }
    }
    async delete(id) {
        try {
            return await axios.delete(`/api/${this.endpoint}/${id}`);
        } catch (e) {
            throw new Error(e);
        }
    }
}
