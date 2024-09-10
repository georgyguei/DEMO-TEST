import Text from '@/components/ui/typography/text';
import Container from '@/components/ui/layout/container';
import Logo from './logo';

export default function Header() {
  return (
    <header className="h-[70px] bg-gray-400">
      <Container className="h-full md:max-w-screen-md">
        <nav className="relative size-full bg-blue-400">
          <Logo />
        </nav>
      </Container>
    </header>
  );
}
