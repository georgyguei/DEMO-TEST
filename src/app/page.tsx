import Container from '@/components/ui/layout/container';
import Box from '../components/ui/layout/box';
import Kangurus from '@/components/shared/kangurus';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Flex from '@/components/ui/layout/flex';
import Spacer from '@/components/ui/layout/flex/spacer';
import Text from '@/components/ui/typography/text';
import Circle from '@/components/ui/layout/center/circle';
import Heading from '@/components/ui/typography/heading';

export default function Home() {
  return (
    <Flex className="h-screen w-screen flex-col">
      <Box className='-z-docked absolute inset-0 bg-[url("/images/sk-home.png")] bg-center bg-cover bg-fixed bg-no-repeat' />
      <Header />
      <main className="flex-1 overflow-hidden">
        <Container className="relative h-full md:max-w-screen-md">
          <Kangurus />
          <Flex className="h-full flex-col overflow-auto">
            <Box className="h-[210px] border-light-blue border-l-4" />
            <Circle className="mt-2 size-[5px] bg-yellow" />
            <Heading as="h2" className="mt-2 font-loomattic text-yellow">
              space
            </Heading>
            <Heading
              as="h1"
              size="4xl"
              className="font-loomattic text-light-blue"
            >
              kangurus
            </Heading>
            <Circle className="mt-2 size-[5px] bg-yellow" />
            <Circle className="mt-2 size-[5px] bg-light-blue" />
            <Text className="mt-2 max-w-[300px] pl-6">
              Wrap into an epic space adventure & defend the motherland against
              the cyber dingoes!
            </Text>
            <Box className="mt-2 h-4 border-yellow border-l-4" />
            <Circle className="mt-2 size-[5px] bg-white" />
            <Box className="mt-2 flex-1 border-light-blue border-l-4" />
          </Flex>
        </Container>
      </main>
      <Footer />
    </Flex>
  );
}

//
