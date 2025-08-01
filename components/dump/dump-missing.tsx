import { Text } from '@mantine/core';
import Link from 'next/link';

export default function DumpMissing() {
  return (
    <div className='mx-20 mt-8 rounded-xl'>
      <div className='dark:bg-dark-600 rounded-sm border-l-4 border-red-500 p-4 not-dark:bg-red-50'>
        <Text>
          Run the <b>/ess dump</b> in-game or from the console to generate a
          server dump. You can then click on the provided link to view the dump,
          or you can give the link to EssentialsX support when getting help.
        </Text>
        <Text mt='xl'>
          Command not working?{' '}
          <Link className='underline' href='/downloads'>
            Update EssentialsX
          </Link>{' '}
          to the latest version and try again.
        </Text>
      </div>
    </div>
  );
}
