import Container from "@components/Container";
import Grid from "@components/Grid";
import Heading from "@components/Heading";
import Seperator from "@components/Seperator";
import Stack from "@components/Stack";

export default function Home() {
    return (
        <Container>
            <Stack>
                <Heading>
                    Right click on the animation <br></br> to copy the styling
                </Heading>
                <Seperator />
                <Grid />
            </Stack>
        </Container>
    );
}
