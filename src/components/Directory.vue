<template>
  <section class="section">
		<div class="shell">
			<div class="section__inner">
				<div class="section__top">
					<ul class="breadcrumbs">
						<li><a href="#">Ada County</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Legal Assistance &amp; Refugee Agencies</a></li>
					</ul>
					<ul class="list-checkboxes">
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
				<div class="section__container">
					<div class="section__content">
            <h2>
							Idaho Legal Aid <br/>
							<small>
								<a href="https://www.idaholegalaid.org/">idaholegalaid.org</a>
							</small>
						</h2>
						<div class="infobox">
							<div class="infobox__aside">
								<a href="tel:2083450106">
									208-345-0106
									<span>ext. 0</span>
								</a>
								<a href="tel:2083450106">
									208-345-0106
									<span>Español</span>
								</a>
							</div>
							<div class="infobox__content">
								Monday - Friday <br/>
								8:30AM - 5:00PM
							</div>
						</div>
						<p>Family law (divorce, custody &amp; protection orders with domestic violence), &amp; landlord-tenant problems, mortgage foreclosure issues. Based on income &amp; type of problem. Walk-ins OK.</p>
						<p>
							3 statewide toll free legal advice lines:
							<br/>Domestic Violence Legal Advice Line <a href="tel:18775002980">1-877-500-2980</a>
							<br/>Fair Housing Legal Advice Line <a href="tel:18663450106">1-866-345-0106</a>
							<br/>Senior Legal Hotline (age 60+) <a href="tel:18663450106">1-866-345-0106</a>.
						</p>
					</div>
					<aside class="section__aside">
						<div class="map-outer">
							<div class="map">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.566952410206!2d-116.20021708450354!3d43.61555747912257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8e32e575dcd%3A0xc716e8f5b998e471!2zMzEwIE4gNXRoIFN0LCBCb2lzZSwgSUQgODM3MDIsINCh0YrQtdC00LjQvdC10L3QuCDRidCw0YLQuA!5e0!3m2!1sbg!2sbg!4v1531815144556" width="320" height="175" frameborder="0" style="border:0" allowfullscreen></iframe>
							</div>
							<address class="map__address">
								<a href="https://www.google.com/maps/place/310+N+5th+St,+Boise,+ID+83702,+%D0%A1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8+%D1%89%D0%B0%D1%82%D0%B8/@43.6155575,-116.2002171,17z/data=!3m1!4b1!4m5!3m4!1s0x54aef8e32e575dcd:0xc716e8f5b998e471!8m2!3d43.6155575!4d-116.1980284">
									310 N 5th Street <br/>
									Boise, ID 83702
								</a>
							</address>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
  name: 'Directory',
  props: {
    msg: String
  }
}
</script>
