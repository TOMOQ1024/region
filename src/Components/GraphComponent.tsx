import { Shaders, Node, GLSL } from "gl-react";
import { Point, Size } from "../Utils";

export default function GraphComponent({
  defis,
  ineqs,
  res,
  origin,
  scale,
}:{
  defis: string[];
  ineqs: string[];
  res: Size;
  origin: Point;
  scale: number;
}) {
  const shaders = Shaders.create({
    graph: {
      frag: GLSL`
  precision highp float;
  varying vec2 uv;
  //uniform float blue;

  const vec4 white = vec4(1.0, 1.0, 1.0, 1.0);
  const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

  bool f(float x, float y){
    ${defis.map(d=>`float ${d};\n`).join('  ')}
    return ${ineqs.length ? ineqs.join('||\n       ') : false};
  }

  void main() {
    gl_FragColor = f((uv.x-0.5)*float(${res.w*scale})+float(${origin.x}), (0.5-uv.y)*float(${res.h*scale})+float(${origin.y})) ? white : black;
  }
  `
    }
  });
  return <Node
    shader={shaders.graph}
    />;
}