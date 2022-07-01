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
} from "spectacle";
import xebiaLogoImg from "./img/XebiaLogo.png";
import threejsStructureImg from "./img/threejs-structure.svg";
import whatImg from "./img/what.jpeg";

import SimpleSceneCode from "./scenes/SimpleScene?raw";
import Box3DCode from "./scenes/components/Box3D?raw";
import PorscheCode from "./scenes/components/Porsche?raw";
import PhysicsSceneCode from "./scenes/PhysicsScene?raw";
import OceanCode from "./scenes/components/Ocean?raw";

import { template } from "./template";
import { theme } from "./theme";
import { SimpleScene } from "./scenes/SimpleScene";
import { ModelScene } from "./scenes/ModelScene";
import { PhysicsScene } from "./scenes/PhysicsScene";
import { OceanScene } from "./scenes/OceanScene";

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
      <Heading>Simple example</Heading>
      <SimpleScene />
    </Slide>
    <Slide>
      <CodePane language="jsx" highlightRanges={[6, 7, 8, 9, 10]}>
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
      <Heading>Shaders</Heading>
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
