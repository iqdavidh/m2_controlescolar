<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1  id="tituloSeccion">Grupos</h1>
				
            </div>
        </div>

    </div>

</template>


<script>


	import dataService from "../services/dataService";



	export default {
		name: 'grupos',
		props: {},
		components: {},
		data() {
			return {}
		},
		methods: {},
		mounted() {
            dataService.getlistaGrupos();
		}


	}
</script>


<style scoped>

</style>
