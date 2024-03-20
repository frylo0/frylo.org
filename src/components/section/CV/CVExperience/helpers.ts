export function getDate(date: Date | undefined): { year: string; month: string } | null {
	if (!date) return null;

	return {
		year: date.toLocaleString('ru', { year: 'numeric' }),
		month: date.toLocaleString('ru', { month: '2-digit' }),
	};
}
