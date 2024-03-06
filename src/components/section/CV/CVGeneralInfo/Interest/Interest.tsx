import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { sInterest, sInterestIcon, sInterestName } from './Interest.css';

interface InterestProps extends React.PropsWithChildren {
	className?: string;
	icon: StaticImageData;
	name: string;
}

export const Interest: React.FC<InterestProps> = ({ className, icon, name }) => {
	return (
		<figure className={cn(sInterest, className)}>
			<Image className={cn(sInterestIcon)} src={icon} alt={`${name} icon`} width={67} height={69} />
			<figcaption className={cn(sInterestName)}>{name}</figcaption>
		</figure>
	);
};
