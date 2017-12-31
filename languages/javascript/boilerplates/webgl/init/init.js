import { createProgram } from './program';
import { compileShader } from './shader';
import { drawScene } from '../animate';
import {
  VERTEX_SHADER_SOURCE_2D,
  FRAGMENT_SHADER_SOURCE_2D
} from '../constants/shaders';

export function initRenderer(canvas) {
  const gl = canvas.getContext('webgl');

  if (!gl) {
    throw(
      'Unable to initialize WebGL. Your browser or machine may not support it.'
    );
  }

  const programInfo = initShaderProgram(gl,
    VERTEX_SHADER_SOURCE_2D, FRAGMENT_SHADER_SOURCE_2D);
  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
}

/**
 * Initialize the shader program
 *
 * @param {!WebGLRenderingContext} gl The WebGL context
 * @param {string} vertexShaderSource Vertex shader GLSL
 * @param {string} fragmentShaderSource Fragment Shader GLSL
 * @return {!ObjType} Information about the shader program
 */
export function initShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
  const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
  const fragmentShader = compileShader(
    gl, fragmentShaderSource, gl.FRAGMENT_SHADER
  );

  const shaderProgram = createProgram(gl, vertexShader, fragmentShader);

  return {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      resolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
}

/**
 * Initialize buffers
 *
 * @param {!WebGLRenderingContext} gl The WebGL context
 * @return {!ObjType} Buffers
 */
export function initBuffers(gl) {
  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [
     1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
    -1.0, -1.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
  };
}
