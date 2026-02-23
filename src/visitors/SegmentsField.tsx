
import { Stack, Chip } from '@mui/material';
import { type FieldProps, useTranslate, useRecordContext } from 'react-admin';
import segments from '../segments/data';
import type { Customer } from '../types/types';

const segmentsById = segments.reduce(
    (acc, segment) => {
        acc[segment.id] = segment;
        return acc;
    },
    {} as { [key: string]: any }
);

const SegmentsField = (_: Omit<FieldProps, 'source'> & { source?: string }) => {
    const translate = useTranslate();
    const record = useRecordContext<Customer>();
    if (!record || !record.groups) {
        return null;
    }
    return (
        <Stack
            direction="row"
            sx={{
                gap: 1,
                flexWrap: 'wrap',
            }}
        >
            {record.groups.map(segmentId => (
                <Chip
                    size="small"
                    key={segmentId}
                    label={translate(segmentsById[segmentId].name)}
                />
            ))}
        </Stack>
    );
};

export default SegmentsField;
