
import { useRecordContext } from 'react-admin';
import type { Customer } from '../types/types';

const AddressField = () => {
    const record = useRecordContext<Customer>();

    return record ? (
        <span>
            {record.address}, {record.city}, {record.stateAbbr} {record.zipcode}
        </span>
    ) : null;
};

export default AddressField;
