<template>
    <div class="position-fixed h-100 bg-vue border-right text-center w-60 px-0">
        <router-link class="navbar-brand mt-2 mx-0" to="/">
            <img src="../assets/logo.png" width="36" alt />
        </router-link>

        <div class="text-center mt-3">
            <b-nav vertical>
                <b-nav-item
                    v-for="(item, i) in routes"
                    :key="i"
                    :to="`${item.pathname}`"
                    :class="[
                        item.active ? 'active' : '',
                        item.divider ? 'mb-3' : ''
                    ]"
                    :disabled="item.disabled"
                    @click="setActive(item.pathname)"
                    v-b-tooltip.hover.right="item.name"
                >
                    <b-icon :icon="`${item.icon}`" class></b-icon>
                </b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<style lang="scss">
$primary: #ccc;
$secondary: #42b983;
$third: #35495d;

.bg-vue {
    background-color: $third;
}
.w-60 {
    max-width: 65px;
    min-width: 65px;
}
.nav-link {
    color: $primary;
}

.nav-link:hover {
    color: $secondary !important;
}

.active {
    border-left: 2px solid $secondary;
}
.active .router-link-active {
    color: $secondary;
}
</style>

<script>
export default {
    name: "SideBar",
    data() {
        return {
            routes: [
                {
                    pathname: "/dashboard",
                    name: "dashboard",
                    icon: "house",
                    active: false,
                    divider: false,
                    disabled: false
                },
                {
                    pathname: "/pages",
                    name: "pages",
                    icon: "file-earmark",
                    active: false,
                    divider: false,
                    disabled: true
                },
                {
                    pathname: "/grids",
                    name: "grid",
                    icon: "grid",
                    active: false,
                    divider: false,
                    disabled: true
                },
                {
                    pathname: "/characters",
                    name: "characters",
                    icon: "person",
                    active: false,
                    divider: true,
                    disabled: false
                },
                {
                    pathname: "/clipboards",
                    name: "clipboard",
                    icon: "clipboard",
                    active: false,
                    divider: false,
                    disabled: true
                },
                {
                    pathname: "/bookmarks",
                    name: "bookmark",
                    icon: "bookmark",
                    active: false,
                    divider: false,
                    disabled: true
                },
                {
                    pathname: "/books",
                    name: "book",
                    icon: "book",
                    active: false,
                    divider: false,
                    disabled: true
                }
            ]
        };
    },
    mounted() {
        this.setActive(window.location.pathname);
    },
    methods: {
        changeSize() {
            this.isShort = !this.isShort;
        },
        setActive(item) {
            this.routes.map(route => {
                route.active = item.includes(route.name.toLowerCase())
                    ? true
                    : false;
            });
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
};
</script>
