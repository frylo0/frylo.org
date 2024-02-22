import cn from 'clsx';
import Link from 'next/link';

import { sContact, sContactLink, sContactName } from './Contact.css';

interface ContactProps extends React.PropsWithChildren {
	className?: string;
	name: string;
	label: string;
	url: string;
}

export const Contact: React.FC<ContactProps> = ({ className, name, label, url }) => {
	return (
		<div className={cn(sContact, className)}>
			<h3 className={cn(sContactName)}>{name}</h3>

			<p>
				<Link className={cn(sContactLink)} href={url} target="_blank" rel="noreferrer noopener">
					{label}
				</Link>
			</p>
		</div>
	);
};
