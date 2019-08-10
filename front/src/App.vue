<template>
    <div id="app" class="container">

        <div class="row">
            <div class="col-md-12">

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
                    <a class="navbar-brand" href="#" style="margin-right: 30px">Control Escolar</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/">Home</router-link>
                            </li>
<!--                            <li class="nav-item">-->
<!--                                <router-link to="/login">Login</router-link>-->
<!--                            </li>-->

                            <li class="nav-item">
                                <router-link to="/grupos">Grupos</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/asistencia">Asistencia</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/actividades">Actividades</router-link>
                            </li>

<!--                            <li class="nav-item">-->
<!--                                <router-link to="/reportes">Reportes</router-link>-->
<!--                            </li>-->
                        </ul>
                    </div>
                </nav>

            </div>
        </div>


        <router-view/>



    </div>
</template>

<style>

    nav#nav{

    }

    nav#nav a {
        font-weight: bold;
        color: #2c3e50;
        margin-right: 15px;
    }

    nav#nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
