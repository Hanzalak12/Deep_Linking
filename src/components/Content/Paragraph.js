import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Paragraph({
	children, content, center, urgent,
}) {
	return (
		<Text
			style={[
				styles.paragraph,
				center && styles.paragraphCenter,
				urgent && styles.paragraphUrgent,
			]}
		>
			{children || content}
		</Text>
	);
}

export default Paragraph;
