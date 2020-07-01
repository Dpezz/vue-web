<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <div class="container-fluid">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#">
                            <b-icon icon="bell"></b-icon>
                        </b-nav-item>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <b-avatar
                                    text="DJ"
                                    :size="28"
                                    badge
                                    badge-variant="success"
                                ></b-avatar>
                                <!-- <em>User</em> -->
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

<script>
export default {
    name: "NavBar",
    props: {}
};
</script>
