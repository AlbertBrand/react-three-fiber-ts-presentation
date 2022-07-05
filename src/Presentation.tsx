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
} from "spectacle";
import xebiaLogoImg from "./img/XebiaLogo.png";
import threejsStructureImg from "./img/threejs-structure.svg";
import whatImg from "./img/what.jpeg";

import SimpleSceneCode from "./scenes/SimpleScene?raw";
import Box3DCode from "./scenes/components/Box3D?raw";
import PorscheCode from "./scenes/components/Porsche?raw";
import PhysicsSceneCode from "./scenes/PhysicsScene?raw";
import OceanCode from "./scenes/components/Ocean?raw";
import TorusSceneCode from "./scenes/TorusScene?raw";

import { template } from "./template";
import { theme } from "./theme";
import { SimpleScene } from "./scenes/SimpleScene";
import { ModelScene } from "./scenes/ModelScene";
import { PhysicsScene } from "./scenes/PhysicsScene";
import { OceanScene } from "./scenes/OceanScene";
import { TorusScene } from "./scenes/TorusScene";
import { ObjectScene } from "./scenes/ObjectScene";

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
      <FlexBox height="100%" flexDirection="column">
        <Image src={xebiaLogoImg} width="50%" />
        <Heading>
          <i>Amazing 3D with React, Three.js and TypeScript</i>
        </Heading>
        <Heading fontSize="h2">Albert Brand</Heading>
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
      <Heading>r3f performance</Heading>
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
      <Heading>r3f performance</Heading>
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
      <Notes>
        This presentation is built with React, react-three-fiber and TypeScript!
      </Notes>
    </Slide>
    <Slide>
      <Heading>Thank you!</Heading>
      <Text>
        <a href="https://github.com/AlbertBrand/react-three-fiber-ts-presentation">
          https://github.com/AlbertBrand/react-three-fiber-ts-presentation
        </a>
      </Text>
      <Text>Albert Brand</Text>
      <ContactMe />
    </Slide>
  </Deck>
);
