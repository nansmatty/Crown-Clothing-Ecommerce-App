import { InputHTMLAttributes } from 'react';
import { Input, Group, FormInputLabel } from './form-input.styles';

type FormInputLabel = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputLabel> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel
					shrink={Boolean(
						otherProps.value &&
							typeof otherProps.value === 'string' &&
							otherProps.value.length
					)}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
