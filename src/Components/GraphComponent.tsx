import { Shaders, Node, GLSL } from "gl-react";
import { Size } from "../Utils";

export default function GraphComponent({
  exp,
  res
}:{
  exp: string;
  res: Size;
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
    return ${exp};
  }

  void main() {
    gl_FragColor = f((uv.x-0.5)*float(${res.w}), (uv.y-0.5)*float(${res.h})) ? white : black;
  }
  `
    }
  });
  return <Node
    shader={shaders.graph}
    />;
}