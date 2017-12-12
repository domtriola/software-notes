/**
 * Creates and compiles a shader.
 *
 * @param {!WebGLRenderingContext} gl The WebGL Context
 * @param {string} shaderSource The GLSL source code for the shader
 * @param {number} shaderType Type of shader - VERTEX_SHADER or FRAGMENT_SHADER
 * @return {!WebGLShader} The shader
 */
export function compileShader(gl, shaderSource, shaderType) {
  const shader = gl.createShader(shaderType);

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw `Could not compile shader: ${gl.getShaderInfoLog(shader)}`;
  }

  return shader;
}
