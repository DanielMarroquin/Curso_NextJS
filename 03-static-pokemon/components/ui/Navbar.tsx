import Image from 'next/image';
import NextLink from 'next/link';
import { useTheme, Text, Spacer, Link } from '@nextui-org/react';


export const Navbar = () => {
    const { theme } = useTheme()


  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            alt='Icono APP'
            width={70}
            height={70}
        />
        <NextLink legacyBehavior href="/" passHref>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
        </NextLink>

        <Spacer css={{ flex: 1 }}/>
    
        <NextLink legacyBehavior href="/favorites">
          <Link css={{ marginRight: '10px' }}>
            <Text color='white'>Favoritos</Text>
          </Link>
        </NextLink>

        
    </div>
  )
}
