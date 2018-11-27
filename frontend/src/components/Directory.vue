<template>
  <section class="section">
		<div class="shell">
			<div class="section__inner">
        <hr/>
				<div class="section__top">
					<ul class="breadcrumbs">
						<li><a href="#">Ada County</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Legal Assistance &amp; Refugee Agencies</a></li>
					</ul>
					<ul class="list-checkboxes"  id="results">
						<li>
							<div class="checkbox">
								<input type="checkbox" name="field-11#" id="field-11#">
								<label for="field-11#">Ada County</label>
							</div>
						</li>
						<li>
							<div class="checkbox">
								<input type="checkbox" name="field-12#" id="field-12#">
								<label for="field-12#">Canyon County</label>
							</div>
						</li>
					</ul>
				</div>
        <Resources></Resources>
			</div>
		</div>
	</section>
</template>
<style>
  .breadcrumbs, .list-checkboxes {
    text-align :left;
  }
</style>
<script>
import Resources from '@/components/Resources.vue'

export default {
  name: 'Directory',
  props: {
    msg: String
  },
  components:{
    Resources
  }
}
</script>
