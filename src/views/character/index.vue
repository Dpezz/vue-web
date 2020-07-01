<template>
    <div class="container">
        <div class="header">
            <div class="header-body">
                <div class="row align-items-end">
                    <div class="col">
                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                            Overview
                        </h6>

                        <!-- Title -->
                        <h3 class="header-title">
                            Characters
                        </h3>
                    </div>
                    <div class="col-auto">
                        <!-- Button -->
                        <a href="#" class="btn btn-success lift">
                            <b-icon
                                icon="plus-circle"
                                class="align-text-top"
                            ></b-icon>
                            New
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Species</th>
                        <th scope="col">Type</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in items" :key="i">
                        <th scope="row">
                            <img
                                :src="item.image"
                                :alt="item.name"
                                class="rounded-circle"
                                width="48"
                            />
                        </th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.status }}</td>
                        <td>{{ item.species }}</td>
                        <td>{{ item.type || "--" }}</td>
                        <td>{{ item.gender }}</td>
                        <td>
                            <router-link
                                :to="`/characters/${item.id}`"
                                class="text-success"
                            >
                                <b-icon icon="eye-fill"></b-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    margin-bottom: 2rem;
    text-align: left;
}
.header-body {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
}
.header-title {
    letter-spacing: -0.06em;
}
.header-pretitle {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #95aac9;
    font-size: 10px;
}
.lift {
    transition: box-shadow 0.25s ease, transform 0.25s ease;
}
</style>

<script>
import service from "../../services/data";

export default {
    data() {
        return {
            items: []
        };
    },
    created() {
        service.show().then(response => {
            this.items = response.data.results;
        });
    },

    methods: {}
};
</script>
