import Box from '@/components/ui/layout/box';
import FooterLinks from './links';
import Container from '@/components/ui/layout/container';

export default function Footer() {
  return (
    <footer className="h-[140px] w-full bg-dark-blue py-4">
      <Container className="h-full md:max-w-screen-md">
        <Box className="relative">
          <FooterLinks />
        </Box>
      </Container>
    </footer>
  );
}
