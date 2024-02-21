import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';

import PNG_Anime from '@/assets/raster/anime.png';
import PNG_Basketball from '@/assets/raster/basketball.png';
import PNG_Frylo from '@/assets/raster/frylo.png';
import PNG_Mate from '@/assets/raster/mate.png';
import PNG_Travel from '@/assets/raster/travel.png';
import {
	sCol1,
	sCol2,
	sCol3,
	sCol4,
	sContact,
	sContactItems,
	sDegree,
	sExperience,
	sGeneralInfo,
	sInstitution,
	sInterest,
	sLanguage,
	sLanguageItems,
	sLocation,
	sMessage,
	sNick,
	sPart,
	sPhoto,
	sSection,
	sTextAccent,
	sTitle,
	sYears,
} from './CV.css';

export interface CVProps {
	className?: string;
}

export const CV: React.FC<CVProps> = ({ className = '' }) => {
	return (
		<section className={cn(sSection, className)}>
			<div className={cn(sGeneralInfo)}>
				<div className={cn(sCol1)}>
					<div className={cn(sPhoto)}>
						<Image src={PNG_Frylo} width={296} height={296} alt="frylo" />
					</div>
				</div>

				<div className={cn(sCol2)}>
					<h1 className={cn(sNick)}>
						frylo<span className={cn(sTextAccent)}>.d.ts</span>
					</h1>

					<div className={cn(sMessage)}>
						<p>
							In the dynamic realm of web development, I stand as a seasoned Senior Frontend Developer with a rich
							tapestry of 6 years of experience. My journey has cultivated a vibrant and extensive tech stack, a
							versatile toolkit capable of crafting any technical solution that the digital landscape demands.{' '}
						</p>
						<p>
							With mastery in technologies like React, JavaScript, HTML, and CSS, I am your steadfast partner in
							translating ideas into pixel-perfect, user-centric web applications. My technical prowess is more than a
							skill; it&apos;s an art form honed through years of immersive learning and dedicated practice.{' '}
						</p>
						<p>
							But my journey doesn&apos;t stop at code. I&apos;ve walked the path of leadership, serving as both a Team
							Lead and a Frontend CTO. These roles have sculpted me into a strategic thinker, capable of orchestrating
							and inspiring teams to craft elegant, scalable, and business-aligned frontend solutions. As a
							collaborator, I&apos;ve cultivated unity and shared vision, propelling projects to new heights.{' '}
						</p>
						<p>
							I stand ready to embark on a new adventure with your organization, driven by the passion to harness
							technology&apos;s power for innovation and excellence. Together, we will weave compelling digital
							experiences, transforming challenges into opportunities on this ever-evolving frontier.{' '}
						</p>
					</div>
				</div>

				<div className={cn(sCol3)}>
					<div className={cn(sPart)}>
						<h2 className={cn(sTitle)}>Education</h2>

						<Institution
							yearBegin={2016}
							yearEnd={2020}
							degree="Programming in computer systems"
							institution="Tauride College at CFU named after V.I.Vernadsky"
							location="Crimea, Ukraine"
						/>
						<Institution
							yearBegin={2020}
							yearEnd={2024}
							degree="Bachelor in Software Engineering"
							institution="Crimean Federal Univercity"
							location="Crimea, Ukraine"
						/>
					</div>

					<div className={cn(sPart)}>
						<h2 className={cn(sTitle)}>Languages</h2>

						<div className={cn(sLanguageItems)}>
							<Language name="Russian" level="Native Language" percent={100} />
							<Language name="English" level="Advanced Level" percent={80} />
							<Language name="Ukrainian" level="Native Language" percent={90} />
						</div>
					</div>
				</div>

				<div className={cn(sCol4)}>
					<div className={cn(sPart)}>
						<h2 className={cn(sTitle)}>Interest</h2>

						<Interest icon={PNG_Mate} name="Mate tea" />
						<Interest icon={PNG_Basketball} name="Basketball" />
						<Interest icon={PNG_Anime} name="Anime" />
						<Interest icon={PNG_Travel} name="Travel" />
					</div>

					<div className={cn(sPart)}>
						<h2 className={cn(sTitle)}>Contacts</h2>

						<div className={cn(sContactItems)}>
							<Contact name="Email" label="frylo.d.ts@gmail.com" url="mailto:frylo.d.ts@gmail.com" />
							<Contact name="LinkedIn" label="linkedin.com/in/frylo" url="https://linkedin.com/in/frylo" />
							<Contact name="YouTube" label="youtube.com/@frylo0" url="https://youtube.com/@frylo0" />
						</div>
					</div>
				</div>
			</div>

			<div className={cn(sExperience)}></div>
		</section>
	);
};

// Education item

interface InstitutionProps extends React.PropsWithChildren {
	className?: string;
	yearBegin: number;
	yearEnd: number;
	degree: string;
	institution: string;
	location: string;
}

const Institution: React.FC<InstitutionProps> = ({ className, yearBegin, yearEnd, degree, institution, location }) => {
	return (
		<div className={cn(sInstitution, className)}>
			<div className={cn(sYears)}>
				<time dateTime={`${yearBegin}`}>{yearBegin}</time> — <time dateTime={`${yearEnd}`}>{yearEnd}</time>
			</div>
			<div className={cn(sDegree)}>{degree}</div>
			<div className={cn(sLocation)}>
				{institution}
				<br />
				{location}
			</div>
		</div>
	);
};

// Languages item

interface LanguageProps extends React.PropsWithChildren {
	className?: string;
	name: string;
	level: string;
	percent: number;
}

const Language: React.FC<LanguageProps> = ({ className }) => {
	return <div className={cn(sLanguage, className)}></div>;
};

// Interests item

interface InterestProps extends React.PropsWithChildren {
	className?: string;
	icon: StaticImageData;
	name: string;
}

const Interest: React.FC<InterestProps> = ({ className }) => {
	return <div className={cn(sInterest, className)}></div>;
};

// Contact item

interface ContactProps extends React.PropsWithChildren {
	className?: string;
	name: string;
	label: string;
	url: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
	return <div className={cn(sContact, className)}></div>;
};
