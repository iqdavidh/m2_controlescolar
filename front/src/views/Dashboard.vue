<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1>Dashboard</h1>
            </div>
        </div>

    </div>

</template>


<script>


	import dataService from "../services/dataService";



	export default {
		name: 'dashboard',
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
