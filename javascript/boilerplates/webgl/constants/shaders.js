export const VERTEX_SHADER_SOURCE = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;

export const FRAGMENT_SHADER_SOURCE = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // white
    }
  `;

// Converts from canvas pixel position to WebGL clip space position
export const VERTEX_SHADER_SOURCE_2D = `
  attribute vec2 aVertexPosition;

  uniform vec2 uResolution;

  void main() {
    vec2 zeroToOne = aVertexPosition / uResolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }
`;

export const FRAGMENT_SHADER_SOURCE_2D = `
  precision mediump float;

  void main() {
   gl_FragColor = vec4(1, 0, 0.5, 1); // redish-purple
  }
`;
