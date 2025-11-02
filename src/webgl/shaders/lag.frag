#define LAG 0.8
#define LAG_INVERSE 0.2

varying vec2 vUv;
uniform sampler2D uDiffuse;
uniform sampler2D uLagTex;

void main()
{
    vec4 LagTex = texture2D(uLagTex, vUv);
    vec4 Diffuse = texture2D(uDiffuse, vUv);

    gl_FragColor = (Diffuse * LAG_INVERSE) + (LagTex * LAG);            
}