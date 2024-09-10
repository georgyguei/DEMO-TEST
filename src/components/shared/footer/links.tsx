import Box from '@/components/ui/layout/box';
import Stack from '@/components/ui/layout/stack';

export default function FooterLinks() {
  const links = [
    { id: 0, name: 'home', path: '/' },
    { id: 1, name: 'discover', path: '/' },
    { id: 2, name: 'feature', path: '/' },
    { id: 3, name: 'seasons', path: '/' },
  ];
  return (
    <Stack className="gap-3 font-loomattic text-xs leading-[1.2]">
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.path} className="transition-colors hover:text-yellow">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <a href="/" className="text-yellow">
        log out
      </a>
    </Stack>
  );
}
