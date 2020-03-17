import React from "react";
import MersenneTwister from "mersenne-twister";
import Color from "color";
import _ from "lodash";
import { Colors } from "./colors";
import { Box } from "@theme-ui/components";

const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_SHAPE_COUNT = 4;

const Paper = (props: React.PropsWithChildren<{ color: Color }>) => (
  <Box variant={"round"} sx={{ backgroundColor: props.color.hex() }}>
    {props.children}
  </Box>
);

function Shape(props: { generator: MersenneTwister; total: number; index: number; colors: Colors }) {
  const diameter = 100;
  const firstRot = props.generator.random();
  const angle = Math.PI * 2 * firstRot;
  const velocity = (diameter / props.total) * props.generator.random() + (props.index * diameter) / props.total;

  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity;

  const translate = "translate(" + tx.toFixed(3) + " " + ty.toFixed(3) + ")";

  const secondRot = props.generator.random();
  const rot = firstRot * 360 + secondRot * 180;
  const center = diameter / 2;
  const rotate = "rotate(" + rot.toFixed(1) + " " + center + " " + center + ")";
  const transform = translate + " " + rotate;
  const fill = props.colors.next();

  return <rect xmlns={SVG_NS} x={0} y={0} width={"100%"} height={"100%"} transform={transform} fill={fill.hex()} />;
}

interface JazziconProps {
  address: string;
}

export function Jazzicon(props: JazziconProps) {
  const seed = parseInt(props.address.toLowerCase().slice(2, 10), 16);
  const generator = new MersenneTwister(seed);
  const colors = new Colors(generator);
  const paperColor = colors.next();

  const renderShapes = () => {
    return _.times(DEFAULT_SHAPE_COUNT).map(i => {
      return <Shape generator={generator} total={DEFAULT_SHAPE_COUNT} index={i} key={`shape-${i}`} colors={colors} />;
    });
  };

  return (
    <Paper color={paperColor}>
      <svg x={0} y={0} xmlns={SVG_NS} viewBox={"0 0 100 100"}>
        {renderShapes()}
      </svg>
    </Paper>
  );
}
