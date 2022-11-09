import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  Slide,
  Deck,
  Text,
  Image,
  CodePane,
  Notes,
  Appear,
  Box,
  SlideLayout,
} from "spectacle";
import xebiaLogoImg from "./img/XebiaLogo.png";
import threejsStructureImg from "./img/threejs-structure.svg";
import whatImg from "./img/what.jpeg";
import frustumImg from "./img/frustum.svg";
import lightsImg from "./img/lights.jpeg";

import ThreeJsSceneCode from "!!raw-loader!./scenes/ThreeJsScene";
import SimpleSceneCode from "!!raw-loader!./scenes/SimpleScene";
import Box3DCode from "!!raw-loader!./scenes/components/Box3D";
import PorscheCode from "!!raw-loader!./scenes/components/Porsche";
import PhysicsSceneCode from "!!raw-loader!./scenes/PhysicsScene";
import OceanCode from "!!raw-loader!./scenes/components/Ocean";
import TorusSceneCode from "!!raw-loader!./scenes/TorusScene";
import BoxGridCode from "!!raw-loader!./scenes/components/BoxGrid";

import { template } from "./template";
import { theme } from "./theme";
import { SimpleScene } from "./scenes/SimpleScene";
import { ModelScene } from "./scenes/ModelScene";
import { PhysicsScene } from "./scenes/PhysicsScene";
import { OceanScene } from "./scenes/OceanScene";
import { TorusScene } from "./scenes/TorusScene";
import { ObjectScene } from "./scenes/ObjectScene";
import { IntroScene } from "./scenes/IntroScene";
import { Knot } from "./scenes/components/Knot";
import { Canvas } from "@react-three/fiber";

const ContactMe = () => (
  <UnorderedList>
    <ListItem>Twitter: @al_bert_brand</ListItem>
    <ListItem>LinkedIn: albertbrand</ListItem>
    <ListItem>GitHub: AlbertBrand</ListItem>
  </UnorderedList>
);

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <IntroScene />
      <FlexBox position="absolute" height="100%" flexDirection="column">
        <Image src={xebiaLogoImg} width="50%" />
        <Heading color="primary">
          <i>Amazing 3D with React, Three.js and TypeScript</i>
        </Heading>
        <Heading fontSize="h3">Albert Brand</Heading>
      </FlexBox>
      <Notes>Notes.</Notes>
    </Slide>
    <Slide>
      <Heading>Who am I?</Heading>
      <Text>Albert Brand</Text>
      <ContactMe />
    </Slide>
    <Slide>
      <FlexBox alignItems="center">
        <Heading>Three.js concepts</Heading>
        <Image src={threejsStructureImg} width="70%" />
      </FlexBox>
    </Slide>
    <SlideLayout.TwoColumn
      left={
        <>
          <Heading>Scene, Camera, Renderer</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>
                <b>Scene</b>: Root container for objects
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Camera</b>: A 'viewpoint' to render a scene from
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Renderer</b>: Renders a scene from a camera viewpoint as an
                image in the browser
              </ListItem>
            </Appear>
          </UnorderedList>
        </>
      }
      right={<Image src={frustumImg} width="80%" />}
    />

    <SlideLayout.TwoColumn
      left={
        <>
          <Heading>Object3D, Mesh</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>
                <b>Object3D</b>: Container object for meshes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Mesh</b>: A combination of:
                <Appear>
                  <ListItem>a geometry</ListItem>
                </Appear>
                <Appear>
                  <ListItem>a material</ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    transformation params (position, orientation, scale)
                  </ListItem>
                </Appear>
              </ListItem>
            </Appear>
          </UnorderedList>
        </>
      }
      right={
        <Canvas
          resize={{ offsetSize: true }}
          camera={{ position: [0, 0, 10] }}
          style={{ height: "50vh" }}
        >
          <pointLight position={[15, 15, 15]} intensity={1} />
          <Knot />
        </Canvas>
      }
    />

    <SlideLayout.TwoColumn
      left={
        <>
          <Heading>Geometry, Material</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>
                <b>Geometry</b>: The shape of the object
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Material</b>: How to draw the object:
                <Appear>
                  <ListItem>color</ListItem>
                </Appear>
                <Appear>
                  <ListItem>texture</ListItem>
                </Appear>
                <Appear>
                  <ListItem>reflection</ListItem>
                </Appear>
              </ListItem>
            </Appear>
          </UnorderedList>
        </>
      }
      right={
        <Canvas
          resize={{ offsetSize: true }}
          camera={{ position: [0, 0, 10] }}
          style={{ height: "50vh" }}
        >
          <pointLight position={[15, 15, 15]} intensity={1} />
          <Knot />
        </Canvas>
      }
    />

    <SlideLayout.TwoColumn
      left={
        <>
          <Heading>Light</Heading>
          <Text>A source of light for a scene</Text>
          <UnorderedList>
            <Appear>
              <ListItem>ambient</ListItem>
            </Appear>
            <Appear>
              <ListItem>directional</ListItem>
            </Appear>
            <Appear>
              <ListItem>point</ListItem>
            </Appear>
            <Appear>
              <ListItem>spot</ListItem>
            </Appear>
          </UnorderedList>
        </>
      }
      right={<Image src={lightsImg} width="100%" />}
    />

    <Slide>
      <Heading>Typed three.js without React</Heading>
      <CodePane language="ts">{ThreeJsSceneCode}</CodePane>
    </Slide>
    <Slide>
      <Heading>What does react-three-fiber do?</Heading>
      <Appear>
        <Text>From the site:</Text>
        <Text fontStyle="italic">
          Build your [three.js] scene declaratively with re-usable,
          self-contained components that react to state, are readily interactive
          and can tap into React's ecosystem.
        </Text>
      </Appear>
      <Appear>
        <Text fontWeight="bold">
          A React component layer on top of all Three.js APIs
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Simple example</Heading>
      <SimpleScene />
    </Slide>
    <Slide>
      <CodePane language="tsx" highlightRanges={[6, 7, 8, 9, 10]}>
        {SimpleSceneCode}
      </CodePane>
    </Slide>
    <Slide>
      <CodePane
        language="tsx"
        highlightRanges={[5, 6, [7, 8], 9, 11, 12, 13, [14, 18], 20, 21]}
      >
        {Box3DCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Comes with many geometries</Heading>
      <ObjectScene />
    </Slide>
    <Slide>
      <Heading>Using models</Heading>
      <ModelScene />
    </Slide>
    <Slide>
      <CodePane language="tsx" highlightRanges={[[8, 12], 15, [16, 20], 21]}>
        {PorscheCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Physics</Heading>
      <PhysicsScene />
    </Slide>
    <Slide>
      <CodePane language="tsx" highlightRanges={[9, [10, 13], 28, 29, 30]}>
        {PhysicsSceneCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Texture Shaders</Heading>
      <OceanScene />
    </Slide>
    <Slide>
      <CodePane
        language="tsx"
        highlightRanges={[
          7,
          [9, 15],
          18,
          [20, 21],
          23,
          [24, 36],
          [38, 40],
          [43, 48],
        ]}
      >
        {OceanCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Postprocessing Shaders</Heading>
      <TorusScene />
    </Slide>
    <Slide>
      <CodePane language="tsx" highlightRanges={[9, 10, [11, 12]]}>
        {TorusSceneCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Animation</Heading>
      <IntroScene />
    </Slide>
    <Slide>
      <CodePane
        language="tsx"
        highlightRanges={[
          [9, 19],
          [21, 22],
        ]}
      >
        {BoxGridCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>R3F+TS package list</Heading>
      <CodePane language="tsx">
        {`
  "dependencies": {
    "@react-spring/three": "^9.4.5",
    "@react-three/cannon": "^6.3.0",
    "@react-three/drei": "^9.14.3",
    "@react-three/fiber": "^8.0.27",
    "@react-three/postprocessing": "^2.4.2",
    "three": "^0.141.0",
    "three-stdlib": "^2.10.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.12",
    "@types/three": "0.141.0",
    "typescript": "^4.5.2"
  }
`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>R3F performance</Heading>
      <Text>❌ Valid, but suboptimal:</Text>
      <CodePane language="tsx">
        {`
<mesh
  visible
  position={new Vector3(1, 2, 3)}
  rotation={new Euler(Math.PI / 2, 0, 0)}
  geometry={new SphereGeometry(1, 16, 16)}
  material={new MeshBasicMaterial({ 
    color: new Color('hotpink'), 
    transparent: true 
  })}
/>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>R3F performance</Heading>
      <Text>✅ Define properties declaratively:</Text>
      <CodePane language="tsx">
        {`
<mesh 
  visible 
  position={[1, 2, 3]} 
  rotation={[Math.PI / 2, 0, 0]}
>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial 
    color="hotpink" 
    transparent 
  />
</mesh>`}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Benefits of TypeScript</Heading>
      <FlexBox flexDirection="row" alignItems="start" flex={1}>
        <Box width="100%">
          {
            <>
              <Text fontWeight="bold">Pros:</Text>
              <UnorderedList>
                <Appear>
                  <ListItem>Helpful in navigating API surface</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Refactoring benefits</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Most types are correct</ListItem>
                </Appear>
              </UnorderedList>
            </>
          }
        </Box>
        <Box width="100%">
          {
            <>
              <Text fontWeight="bold">Cons:</Text>
              <UnorderedList>
                <Appear>
                  <ListItem>
                    Some hairy edge cases (add stuff to JSX.IntrinsicElements
                    etc)
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Not all types are complete</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Adds another layer of complexity</ListItem>
                </Appear>
              </UnorderedList>
            </>
          }
        </Box>
      </FlexBox>
    </Slide>
    <Slide>
      <Image src={whatImg} />
    </Slide>
    <Slide>
      <Heading>This presentation is built with</Heading>
      <Appear>
        <UnorderedList>
          <ListItem>React</ListItem>
          <ListItem>react-three-fiber</ListItem>
          <ListItem>TypeScript</ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Thank you!</Heading>
      <UnorderedList>
        <ListItem>
          <a href="https://github.com/AlbertBrand/react-three-fiber-ts-presentation">
            https://github.com/AlbertBrand/react-three-fiber-ts-presentation
          </a>
        </ListItem>
        <ListItem>
          <a href="https://react-three-fiber-ts-presentation.vercel.app">
            https://react-three-fiber-ts-presentation.vercel.app
          </a>
        </ListItem>
      </UnorderedList>
      <ContactMe />
    </Slide>
  </Deck>
);
