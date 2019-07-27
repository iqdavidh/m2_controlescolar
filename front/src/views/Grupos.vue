<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1 id="tituloSeccion">Grupos</h1>
            </div>
        </div>

        <div v-if="isDebug">
            {{}}
        </div>

    </div>

</template>


<script>

	import libConfig from "../lib/libConfig";
	import dataService from "../services/dataService";


	export default {
		name: 'grupos',
		props: {},
		components: {},
		data() {
			return {
				isDebug:libConfig.isDebug
            }
		},
		methods: {},
		mounted() {
			dataService.getlistaGrupos();
		}


	}
</script>


<style scoped>

</style>
