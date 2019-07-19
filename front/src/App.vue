<template>
    <div id="app" class="container">

        <div class="row">
            <div class="col-md-12">
                <div id="nav">
                    <router-link to="/">Home</router-link>
                    |
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <router-view/>
            </div>
        </div>


    </div>
</template>

<style>

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
