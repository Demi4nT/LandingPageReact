import React from "react";

function Jumbotron() {
	return (
		<div>
			<div class="container-fluid">
				<div class="h-100 p-5 bg-light border rounded-3">
					<h2>A warm welcome!</h2>
					<p>
						Or, keep it light and add a border for some added
						definition to the boundaries of your content. Be sure to
						look under the hood at the source HTML here as we've
						adjusted the alignment and sizing of both column's
						content for equal-height.
					</p>
					<button class="btn btn-outline-secondary" type="button">
						Call to action!
					</button>
				</div>
			</div>
		</div>
	);
}
export default Jumbotron;
