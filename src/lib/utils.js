
export function shortenAddress(address) {
	if (address.length <= 10) {
		return address;
	}
	const start = address.slice(0, 4);
	const end = address.slice(-3);
	return `${start}....${end}`;
}

export const examineAddress = (address) => {
	if (/\d/.test(address)) {
		return shortenAddress(address);
	} else {
		return address;
	}
}