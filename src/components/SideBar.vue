<template>
    <div class="position-fixed h-100 bg-light text-center w-60 px-0">
        <router-link
            class="navbar-brand mt-2 mx-0"
            to="/"
            v-b-popover.hover.right="'I am popover directive content!'"
        >
            <img src="../assets/logo.png" class width="36" alt />
        </router-link>

        <div class="text-center mt-3">
            <nav class="nav flex-column">
                <li
                    class="nav-item"
                    v-for="(item, i) in routes"
                    :key="i"
                    @click="setActive(item.pathname)"
                >
                    <router-link
                        class="nav-link"
                        :to="`${item.pathname}`"
                        :class="item.active ? 'active' : ''"
                        v-b-popover.hover.right="item.name"
                    >
                        <b-icon :icon="`${item.icon}`" class=""></b-icon>
                    </router-link>
                    <div
                        class="dropdown-divider mx-2 my-3"
                        v-if="item.divider"
                    ></div>
                </li>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.w-60 {
    max-width: 65px;
    min-width: 65px;
}
.nav-link {
    color: #2d3e50;
}

.nav-link:hover {
    color: #42b983 !important;
}

.active {
    border-left: 2px solid #41b883;
    color: #41b883;
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
                    divider: false
                },
                {
                    pathname: "/pages",
                    name: "pages",
                    icon: "file-earmark",
                    active: false,
                    divider: false
                },
                {
                    pathname: "/grids",
                    name: "grid",
                    icon: "grid",
                    active: false,
                    divider: false
                },
                {
                    pathname: "/characters",
                    name: "characters",
                    icon: "person",
                    active: false,
                    divider: true
                },
                {
                    pathname: "/clipboards",
                    name: "clipboard",
                    icon: "clipboard",
                    active: false,
                    divider: false
                },
                {
                    pathname: "/bookmarks",
                    name: "bookmark",
                    icon: "bookmark",
                    active: false,
                    divider: false
                },
                {
                    pathname: "/books",
                    name: "book",
                    icon: "book",
                    active: false,
                    divider: false
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
