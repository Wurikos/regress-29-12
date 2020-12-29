import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, List, Input, Link, Image, Icon, Hr, Button, Box } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"box": {
		"kind": "Box",
		"props": {}
	}
};

const Testcomponent = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<List {...override("list")}>
			<Text {...override("text1")} />
		</List>
		<Input {...override("input")} />
		<Link {...override("link")} />
		<Image {...override("image")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Button {...override("button")} />
		<Box {...override("box")} />
		{children}
	</Box>;
};

Object.assign(Testcomponent, { ...Box,
	defaultProps,
	overrides
});
export default Testcomponent;