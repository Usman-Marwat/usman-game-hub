import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../entities/Platform';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};

export default PlatformIconList;

/*
            [key: string]
This is called an index signature. So this represents a key or property in this object
By using the "Index Signature" syntax we don't have to specify the name of these keys.
We just say we have any number of keys of type string.
Secondly, each key is mapped to a value of type IconType.


*/
