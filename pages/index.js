import Container from 'components/Container';
import Grid from 'components/Grid';
import Heading from 'components/Heading';
import Separator from 'components/Separator';
import Stack from 'components/Stack';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <Container>
      <Stack>
        <Heading>
          Right click the animation <br /> to copy the styling
        </Heading>
        <Separator />
        <Grid />
        <Footer />
      </Stack>
    </Container>
  );
}
