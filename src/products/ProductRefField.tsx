
import { useRecordContext, Link } from 'react-admin';
import type { Product } from '../types/types';

const ProductRefField = (_: { source: string }) => {
    const record = useRecordContext<Product>();
    return record ? (
        <Link to={`/products/${record.id}`}>{record.reference}</Link>
    ) : null;
};

export default ProductRefField;
