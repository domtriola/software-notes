/**
 * Creates a program from 2 shaders.
 *
 * @param {!WebGLRenderingContext} gl The WebGL Context
 * @param {!WebGLShader} vertexShader A vertex shader
 * @param {!WebGLShader} fragmentShader A fragment shader
 * @return {!WebGLProgram} A program
 */
export function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw (`Program filed to link: ${gl.getProgramInfoLog(program)}`);
  }

  return program;
}
