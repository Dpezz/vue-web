<template>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <SideBar />
        <div class="main">
            <NavBar />
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.main {
    margin-left: 65px;
}
</style>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    name: "Home",
    layout: "private",
    components: {
        NavBar,
        SideBar
    }
};
</script>
