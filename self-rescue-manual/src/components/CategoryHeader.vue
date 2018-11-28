<template>
<section class="section">
		<div class="shell">
			<header class="section__head">
				<div class="filters">
					<h4>Explore Resource by County:</h4>

					<ul class="list-checkboxes">
						<li>
							<div class="checkbox">
								<input type="checkbox" name="field-1#" id="field-1#">

								<label for="field-1#">Ada County</label>
							</div><!-- /.checkbox -->
						</li>

						<li>
							<div class="checkbox">
								<input type="checkbox" name="field-2#" id="field-2#">

								<label for="field-2#">Canyon County</label>
							</div><!-- /.checkbox -->
						</li>
					</ul><!-- /.list-checkboxes -->
				</div><!-- /.filters -->
			</header><!-- /.section__head -->
		</div>
	</section>
</template>

<script>
export default {
  name: 'CategoryHeader',
	data() {
		return {
			entries: []
		}
	},
	methods: {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
