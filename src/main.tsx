import React from "react";
import { createRoot } from "react-dom/client";
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, BakeShadows, ContactShadows } from "@react-three/drei";

import { template } from "./template";
import { theme } from "./theme";
import { Box3D } from "./Box3D.js";
import { Porsche } from "./Porsche";
import xebiaLogo from "./img/XebiaLogo.png";

// const SlideFragments = () => (
//   <>
//     <Slide>
//       <Text>This is a slide fragment.</Text>
//     </Slide>
//     <Slide>
//       <Text>This is also a slide fragment.</Text>
//       <Appear>
//         <Text>This item shows up!</Text>
//       </Appear>
//       <Appear>
//         <Text>This item also shows up!</Text>
//       </Appear>
//     </Slide>
//   </>
// );

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <FlexBox bg="white" padding="20px">
          <Image src={xebiaLogo} width="50%" />
        </FlexBox>
        <Heading>
          <i>Amazing 3D with Three.js, React and TypeScript</i>
        </Heading>
        <Heading fontSize="h2">@al_bert_brand</Heading>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Canvas resize={{ offsetSize: true }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <Box3D />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </Slide>
    <Slide>
      <CodePane
        language="jsx"
        highlightRanges={[[1], [2, 3], [4, 7], [5], [6]]}
      >{`
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="white" position={[0, 0, 5]} />
  <mesh>
    <Box3D />
    <meshStandardMaterial />
  </mesh>
  <OrbitControls />
</Canvas>
      `}</CodePane>
    </Slide>
    <Slide>
      <CodePane
        language="jsx"
        highlightRanges={[[5], [6, 7], [8], [10, 17], [18, 19]]}
      >{`
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function Box3D(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "yellow" : "red"} />
    </mesh>
  );
}
`}</CodePane>
    </Slide>
    <Slide>
      <Canvas
        resize={{ offsetSize: true }}
        camera={{ position: [-10, 0, 15], fov: 30 }}
      >
        <Porsche
          scale={1.6}
          position={[-0.5, -0.18, 0]}
          rotation={[0, Math.PI / 5, 0]}
        />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.2} />
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.16, 0]}
          scale={10}
          blur={3}
          opacity={1}
          far={10}
        />
        <BakeShadows />
        <OrbitControls />
      </Canvas>
    </Slide>

    {/* <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
    </Slide> */}
    {/* <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide> */}
    {/* <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide> */}
    {/* <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide> */}
    {/* <SlideFragments /> */}
    {/* <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div> */}
    {/* <MarkdownSlide componentProps={{ color: "yellow" }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    <Slide>
      <Grid
        flex={1}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{"<Grid />"}</CodeSpan> and{" "}
            <CodeSpan>{"<FlexBox />"}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet> */}
  </Deck>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Presentation />);
