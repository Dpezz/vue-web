<template>
    <div>
        <b-navbar
            toggleable="lg"
            type="light"
            variant="light"
            class="border-bottom"
        >
            <div class="container-fluid">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-nav-form>
                        <b-input-group>
                            <b-input-group-prepend is-text>
                                <b-icon icon="search"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input
                                type="search"
                                placeholder="Search terms"
                            ></b-form-input>
                        </b-input-group>
                    </b-nav-form>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                <b-icon icon="bell"></b-icon>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                <b-avatar
                                    text="DJ"
                                    :size="28"
                                    badge
                                    badge-variant="success"
                                ></b-avatar>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<style lang="scss">
.dropdown:hover > .dropdown-menu {
    display: block;
}

.dropdown > .dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
}
</style>

<script>
export default {
    name: "NavBar",
    props: {}
};
</script>
