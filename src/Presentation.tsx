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
import xebiaLogo from "./img/XebiaLogo.png";

import { template } from "./template";
import { theme } from "./theme";
import { SimpleScene } from "./scenes/SimpleScene";
import SimpleSceneCode from "./scenes/SimpleScene?raw";
import Box3DCode from "./scenes/components/Box3D?raw";
import { ModelScene } from "./scenes/ModelScene";

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={xebiaLogo} width="50%" />
        <Heading>
          <i>Amazing 3D with Three.js, React and TypeScript</i>
        </Heading>
        <Heading fontSize="h2">Albert Brand</Heading>
      </FlexBox>
      <Notes>Notes.</Notes>
    </Slide>
    <Slide>
      <Heading>Who am I?</Heading>
      <Text>Albert Brand</Text>
      <UnorderedList>
        <ListItem>Twitter: @al_bert_brand</ListItem>
        <ListItem>LinkedIn: albertbrand</ListItem>
        <ListItem>GitHub: albertbrand</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Simple example</Heading>
      <SimpleScene />
    </Slide>
    <Slide>
      <CodePane language="jsx" highlightRanges={[[6], [7], [8], [9], [10]]}>
        {SimpleSceneCode}
      </CodePane>
    </Slide>
    <Slide>
      <CodePane
        language="tsx"
        highlightRanges={[
          [5],
          [6],
          [7, 8],
          [9],
          [11],
          [12],
          [13],
          [14, 18],
          [20],
          [21],
        ]}
      >
        {Box3DCode}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Loading models</Heading>
      <ModelScene />
    </Slide>
    <Slide>
      <CodePane language="tsx" highlightRanges={[[1, 5], [8], [9, 13], [14]]}>
        {`
type GLTFResult = GLTF & {
  materials: {
    [key: string]: Instance;
  };
};

export function Porsche(props: JSX.IntrinsicElements["mesh"]) {
  const { scene, materials } = useGLTF(model) as GLTFResult;
  useMemo(() => {
    applyProps(materials.paint, {
      color: "blue",
    });
  }, [materials]);
  return <primitive {...props} object={scene} />;
}`}
      </CodePane>
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
