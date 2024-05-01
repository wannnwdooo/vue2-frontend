import { CommentsApi } from "./comments.api";

const state = () => ({
    comments: [],
    isLoading: false,
    sortField: "id",
    sortOrder: "asc",
});

const getters = {
    getComments: (state) => state.comments,
    getLoading: (state) => state.isLoading,
};

const mutations = {
    SET_COMMENTS(state, comments) {
        state.comments = comments;
    },
    SET_LOADING(state, isLoading) {
        state.isLoading = isLoading;
    },
    ADD_COMMENT(state, comment) {
        state.comments = [...state.comments, comment];
    },
    DELETE_COMMENT(state, id) {
        state.comments = state.comments.filter((comment) => comment.id !== id);
    },
    SORT_COMMENTS(state, { field, order }) {
        state.sortField = field;
        state.sortOrder = order;
        state.comments = [...state.comments].sort((a, b) => {
            if (state.sortField === "id") {
                return state.sortOrder === "asc" ? a.id - b.id : b.id - a.id;
            } else if (state.sortField === "date") {
                return state.sortOrder === "asc"
                    ? Date.parse(a.date) - Date.parse(b.date)
                    : Date.parse(b.date) - Date.parse(a.date);
            }
        });
    },
};

const actions = {
    fetchComments: async ({ commit }) => {
        commit("SET_LOADING", true);
        const data = await new CommentsApi().getAll();
        commit("SET_COMMENTS", data);
        commit("SET_LOADING", false);
    },
    deleteComment: async ({ commit, state }, id) => {
        await new CommentsApi().delete(id);
        commit("DELETE_COMMENT", id);
    },
    addComment: async ({ commit, state }, payload) => {
        const { data } = await new CommentsApi().create(payload);
        commit("ADD_COMMENT", data);
        commit("SORT_COMMENTS", {
            field: state.sortField,
            order: state.sortOrder,
        });
    },
    sortBy: ({ commit }, { field, order }) => {
        commit("SORT_COMMENTS", { field, order });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
