import Box from '@/components/ui/layout/box';

export default function Logo() {
  return (
    <Box className='-translate-x-[50%] absolute top-0 left-0 z-banner size-[100px] bg-[url("/images/sk-banner.png")] bg-center bg-contain bg-no-repeat' />
  );
}
