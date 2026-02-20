import * as React from 'react';
import { SelectArrayInput, type SelectArrayInputProps } from 'react-admin';

import segments from '../segments/data';

const SegmentsInput = (props: SelectArrayInputProps) => (
    <SelectArrayInput
        {...props}
        source="groups"
        translateChoice
        choices={segments}
    />
);

export default SegmentsInput;
