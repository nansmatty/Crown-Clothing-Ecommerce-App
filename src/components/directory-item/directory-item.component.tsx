import { useNavigate } from 'react-router-dom';
import { Category } from '../../store/categories/category.types.js';
import { DirectoryCategory } from '../directory/directory.component.js';
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles.jsx';

type DirectoryItemProps = {
	category: DirectoryCategory;
};

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
	const { imageUrl, title, route } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
