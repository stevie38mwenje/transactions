import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formatDate, parseDate} from 'react-day-picker/moment';

const DateRange = ({ label, state, setState }) => {
    const showFromMonth = () => {
        const { from, to } = state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            // this.to.getDayPicker().showMonth(from);
        }
    };

    const handleFromChange = (from) => {
        setState({ ...state, from });
    };

    const handleToChange = (to) => {
        setState({ ...state, to }, showFromMonth);
    };

    const { from, to } = state;
    const modifiers = { start: from, end: to };
    return (
        <>
            <div
                className="InputFromTo"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <p style={{ marginBottom: '0px', textAlign: 'left' }}>{label}</p>
                <div>
                    <DayPickerInput
                        value={from}
                        placeholder="From"
                        format="LL"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                            selectedDays: [from, { from, to }],
                            disabledDays: { after: to },
                            toMonth: to,
                            modifiers,
                            numberOfMonths: 1,
                        }}
                        onDayChange={handleFromChange}
                    />{' '}
                    —{' '}
                    <span className="InputFromTo-to">
            <DayPickerInput
                value={to}
                placeholder="To"
                format="LL"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: from },
                    modifiers,
                    month: from,
                    fromMonth: from,
                    numberOfMonths: 1,
                }}
                onDayChange={handleToChange}
            />
          </span>
                </div>
            </div>
        </>
    );
};
export default DateRange;