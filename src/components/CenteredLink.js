import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "960px",
	"height": "640px",
	"margin": "0px auto 0px auto",
	"display": "flex",
	"align-items": "center",
	"justify-content": "center",
	"children": <Link href="#Contact" align-self="center" font="48px --fontFamily-sans">
		Contact
	</Link>
};
const overrides = {};

const CenteredLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(CenteredLink, { ...Box,
	defaultProps,
	overrides
});
export default CenteredLink;