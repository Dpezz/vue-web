<template>
    <div class="container">
        <div class="header">
            <div class="header-body">
                <div class="row align-items-end">
                    <div class="col">
                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                            <router-link to="/characters">
                                <b-icon icon="arrow-left"></b-icon>
                                back
                            </router-link>
                        </h6>

                        <!-- Title -->
                        <h3 class="header-title">Character: {{ item.name }}</h3>
                    </div>
                    <div class="col-auto"></div>
                </div>
                <!-- / .row -->
            </div>
        </div>

        <div>
            <b-form>
                <div class="text-center">
                    <b-avatar
                        :src="item.image"
                        size="6rem"
                        class="text-center mb-4"
                    ></b-avatar>
                </div>
                <b-form-group
                    id="input-group-2"
                    label="Name"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-1"
                        v-model="item.name"
                        type="text"
                        required
                        placeholder="Enter Name"
                    ></b-form-input>
                </b-form-group>
                <div class="row">
                    <div class="col">
                        <b-form-group
                            id="input-group-2"
                            label="Status"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="item.status"
                                required
                                placeholder="Enter status"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col">
                        <b-form-group
                            id="input-group-2"
                            label="Species"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="item.species"
                                type="text"
                                required
                                placeholder="Enter species"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <b-form-group
                    id="input-group-2"
                    label="Gender"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        v-model="item.gender"
                        required
                        placeholder="Enter gender"
                    ></b-form-input>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>

<script>
import service from "../../services/data";

export default {
    name: "Item",
    data() {
        return {
            item: {}
        };
    },
    created() {
        service.showItem(this.$route.params.id).then(response => {
            this.item = response.data;
        });
    },

    methods: {}
};
</script>
