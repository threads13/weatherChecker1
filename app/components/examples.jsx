var React = require("react");
var {Link} = require("react-router");

var Examples = () => {
		return(
			<div>
				<h1 className="text-center page-title">Examples</h1>
				<p>Here are a few example locations to try out:</p>
				<ol>
					<li>
						<Link to="/?location=Indianapolis">Indianapolis, IN</Link>
					</li>
					<li>
						<Link to="/?location=Seattle">Seattle, WA</Link>
					</li>
				</ol>
			</div>	
		)
};

module.exports = Examples;